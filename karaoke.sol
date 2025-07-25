// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract KaraokeVoting {
    // Dirección del administrador que puede registrar cantantes
    address public owner;
    
    // Estructura para representar un cantante
    struct Singer {
        bytes32 id; // Hash único que identifica al cantante
        uint256 votes; // Total de votos recibidos (representados por la cantidad de ETH)
        string displayName; // Nombre para mostrar (opcional, no se usa para identificación)
    }
    
    // Estructura para representar un voto
    struct Vote {
        address voter; // Dirección del votante
        bytes32 singerId; // ID del cantante votado
        uint256 amount; // Cantidad de ETH (en wei) votados
    }

    // Mapeo de ID de cantante a estructura de cantante
    mapping(bytes32 => Singer) public singers;
    
    // Lista de todos los IDs de cantantes registrados
    bytes32[] public singerIds;
    
    // Mapeo de dirección de votante a lista de votos
    mapping(address => Vote[]) public voterHistory;
    
    // Acumulador total de ETH recibido (opcional, para seguimiento)
    uint256 public totalVotesReceived;

    // Eventos para notificar cambios
    event SingerRegistered(bytes32 indexed id, string displayName);
    event Voted(address indexed voter, bytes32 indexed singerId, uint256 amount);

    // Modificador para restringir acceso al propietario
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // Constructor: se ejecuta al desplegar el contrato
    constructor() {
        owner = msg.sender;
    }

    // Función para registrar un nuevo cantante (solo el administrador)
    // El ID debe ser un hash único generado fuera de este contrato
    function registerSinger(bytes32 _id, string memory _displayName) external onlyOwner {
        require(singers[_id].id == 0, "Singer already registered"); // Verifica que no exista
        
        singers[_id] = Singer(_id, 0, _displayName); // Crea el cantante con 0 votos
        singerIds.push(_id); // Añade el ID a la lista
        
        emit SingerRegistered(_id, _displayName);
    }

    // Función para votar por un cantante
    // Se envía ETH junto con la llamada a esta función
    function vote(bytes32 _singerId) external payable {
        require(singers[_singerId].id != 0, "Singer not found"); // Verifica que el cantante exista
        require(msg.value > 0, "Vote amount (ETH) must be greater than 0"); // msg.value contiene el ETH enviado
        
        // Actualizar el conteo de votos del cantante (usamos msg.value directamente)
        singers[_singerId].votes += msg.value; // msg.value está en wei
        totalVotesReceived += msg.value;
        
        // Registrar el voto del usuario
        voterHistory[msg.sender].push(Vote(msg.sender, _singerId, msg.value));
        
        emit Voted(msg.sender, _singerId, msg.value);
    }

    // Función de vista para obtener todos los cantantes registrados
    function getAllSingers() external view returns (Singer[] memory) {
        Singer[] memory allSingers = new Singer[](singerIds.length);
        for (uint i = 0; i < singerIds.length; i++) {
            allSingers[i] = singers[singerIds[i]];
        }
        return allSingers;
    }
    
    // Función de vista para obtener el número total de votos (ETH en wei) de un cantante específico
    function getTotalVotes(bytes32 _singerId) external view returns (uint256) {
        return singers[_singerId].votes;
    }
    
    // Función de vista para obtener el historial de votos de un usuario
    function getVoterHistory(address _voter) external view returns (Vote[] memory) {
        return voterHistory[_voter];
    }
    
    // Función para que el owner retire el ETH acumulado (opcional, por seguridad)
    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
    
    // Fallback para recibir ETH directamente (opcional, puede estar deshabilitado para seguridad)
    // receive() external payable {
    //     revert("Direct ETH transfers not allowed");
    // }
}