// Dirección del contrato KaraokeVoting desplegado en Moonbase Alpha
// Reemplaza con la dirección real de tu contrato
const KARAOKE_CONTRACT_ADDRESS = "0x294546384f47D18C94918D898521f29A616f06A1"; // Tu dirección

// ABI del contrato KaraokeVoting
const KARAOKE_ABI = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_id",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "_displayName",
				"type": "string"
			}
		],
		"name": "registerSinger",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "displayName",
				"type": "string"
			}
		],
		"name": "SingerRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_singerId",
				"type": "bytes32"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "singerId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllSingers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "id",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "votes",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "displayName",
						"type": "string"
					}
				],
				"internalType": "struct KaraokeVoting.Singer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_singerId",
				"type": "bytes32"
			}
		],
		"name": "getTotalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "getVoterHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "voter",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "singerId",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct KaraokeVoting.Vote[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "singerIds",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "singers",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "votes",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "displayName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVotesReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voterHistory",
		"outputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "singerId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Variables globales
let provider, signer, account = "";
let karaokeContract;
let singersData = []; // Almacenar datos de cantantes
let chart = null; // Instancia del gráfico

// Dirección del owner/admin (reemplaza con la dirección real de tu cuenta)
// Esta es la dirección que desplegó el contrato y puede registrar cantantes
const OWNER_ADDRESS = "0x30a6c2FDCba6106Bcb6D49a0d7DBb16e2A121979"; // Tu dirección de owner

// Función para conectar MetaMask
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("Por favor, instala MetaMask.");
            return;
        }
        
        // Solicitar acceso a las cuentas
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        
        // Configurar el proveedor y el firmante para Moonbase Alpha
        // Chain ID para Moonbase Alpha es 1287
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("wallet_switchEthereumChain", [{ chainId: "0x507" }]); // 1287 en hex
        signer = provider.getSigner();
        
        // Obtener instancia del contrato
        karaokeContract = new ethers.Contract(KARAOKE_CONTRACT_ADDRESS, KARAOKE_ABI, signer);
        
        // Actualizar la UI con la cuenta conectada
        document.getElementById("caccount").innerHTML = `Cuenta conectada: ${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('mainSection').style.display = 'block';
        
        // Mostrar sección de admin si es el owner
        if (account.toLowerCase() === OWNER_ADDRESS.toLowerCase()) {
            document.getElementById('adminSection').style.display = 'block';
        }
        
        // Escuchar eventos de MetaMask
        setupEventListeners();
        
        // Cargar datos iniciales
        await updateBalance();
        await loadSingers();
        await loadResults();
        
    } catch (error) {
        console.error("Error al conectar MetaMask:", error);
        if (error.code === 4902) {
            alert("Por favor, agrega la red Moonbase Alpha a MetaMask.");
        }
    }
}

// Configurar listeners de MetaMask
function setupEventListeners() {
    ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            alert("MetaMask desconectado.");
            disconnectWallet();
        } else {
            account = accounts[0];
            window.location.reload(); // Recargar para actualizar todo
        }
    });
    
    ethereum.on('chainChanged', (_chainId) => {
        if (_chainId !== "0x507") { // 1287 en hex
            alert("Por favor, cambia a la red Moonbase Alpha.");
        }
        window.location.reload();
    });
    
    // Escuchar eventos del contrato para actualizar UI automáticamente
    if (karaokeContract) {
        karaokeContract.on("SingerRegistered", (id, displayName) => {
            console.log("Nuevo cantante registrado:", id, displayName);
            loadSingers();
            loadResults();
        });
        
        karaokeContract.on("Voted", (voter, singerId, amount) => {
            console.log("Nuevo voto:", voter, singerId, ethers.utils.formatEther(amount));
            if (voter.toLowerCase() === account.toLowerCase()) {
                updateBalance(); // Actualizar saldo del votante
            }
            loadResults(); // Actualizar resultados
        });
    }
}

// Función para desconectar MetaMask
function disconnectWallet() {
    account = "";
    // Limpiar listeners
    if (karaokeContract) {
        karaokeContract.removeAllListeners();
    }
    if (ethereum && ethereum.removeListener) {
        ethereum.removeListener('accountsChanged', setupEventListeners);
        ethereum.removeListener('chainChanged', setupEventListeners);
    }
    window.location.reload();
}

// Actualizar el saldo del usuario
async function updateBalance() {
    if (provider && account) {
        try {
            const balanceWei = await provider.getBalance(account);
            const balanceEth = ethers.utils.formatEther(balanceWei);
            document.getElementById("userBalance").textContent = parseFloat(balanceEth).toFixed(4);
        } catch (error) {
            console.error("Error al obtener el saldo:", error);
        }
    }
}

// Cargar la lista de cantantes
async function loadSingers() {
    try {
        if (!karaokeContract) return;
        
        singersData = await karaokeContract.getAllSingers();
        console.log("Cantantes cargados:", singersData);
        
        // Actualizar el select de votación
        const selectElement = document.getElementById("selectedSingerId");
        selectElement.innerHTML = ""; // Limpiar opciones
        
        if (singersData.length === 0) {
            document.getElementById("singersListContainer").innerHTML = "<p>No hay cantantes registrados.</p>";
            return;
        }
        
        document.getElementById("singersListContainer").innerHTML = "<p>Selecciona un cantante para votar:</p>";
        
        singersData.forEach((singer, index) => {
            // Crear opción para el select
            const option = document.createElement("option");
            option.value = singer.id;
            option.textContent = `${singer.displayName} (ID: ${singer.id.substring(0, 10)}...)`;
            selectElement.appendChild(option);
        });
        
    } catch (error) {
        console.error("Error al cargar cantantes:", error);
        document.getElementById("singersListContainer").innerHTML = "<p>Error al cargar cantantes.</p>";
    }
}

// Registrar un nuevo cantante (solo owner)
async function registerSinger() {
    try {
        if (!karaokeContract) return;
        
        const nameInput = document.getElementById("singerName");
        const name = nameInput.value.trim();
        
        if (!name) {
            alert("Por favor, ingresa un nombre para el cantante.");
            return;
        }
        
        // Generar un ID único basado en el nombre y un timestamp
        const idString = `${name}_${Date.now()}`;
        const idBytes32 = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(idString));
        
        const resultDiv = document.getElementById("registrationResult");
        resultDiv.innerHTML = `Registrando... ID generado: ${idBytes32.substring(0, 10)}...`;
        
        // Llamar a la función del contrato
        const tx = await karaokeContract.registerSinger(idBytes32, name);
        resultDiv.innerHTML = `Transacción enviada: <a href="https://moonbase.moonscan.io/tx/${tx.hash}" target="_blank">${tx.hash.substring(0, 10)}...</a>`;
        
        // Esperar confirmación
        await tx.wait();
        resultDiv.innerHTML = `¡Cantante "${name}" registrado exitosamente!`;
        nameInput.value = ""; // Limpiar input
        
        // Recargar lista de cantantes
        await loadSingers();
        
    } catch (error) {
        console.error("Error al registrar cantante:", error);
        document.getElementById("registrationResult").innerHTML = `Error: ${error.message.substring(0, 100)}...`;
    }
}

// Votar por un cantante
async function voteForSinger() {
    try {
        if (!karaokeContract || !account) return;
        
        const singerId = document.getElementById("selectedSingerId").value;
        const amountEth = document.getElementById("voteAmount").value;
        
        if (!singerId) {
            alert("Por favor, selecciona un cantante.");
            return;
        }
        
        if (!amountEth || parseFloat(amountEth) <= 0) {
            alert("Por favor, ingresa una cantidad válida de DEV para votar.");
            return;
        }
        
        const amountWei = ethers.utils.parseEther(amountEth);
        
        // Verificar saldo
        const balanceWei = await provider.getBalance(account);
        if (balanceWei.lt(amountWei)) {
            alert("No tienes suficiente DEV para votar.");
            return;
        }
        
        const voteButton = document.querySelector("#votingControls button");
        const originalText = voteButton.textContent;
        voteButton.textContent = "Votando...";
        voteButton.disabled = true;
        
        const txnHashDiv = document.getElementById("voteTxnHash");
        txnHashDiv.innerHTML = "Enviando transacción...";
        
        // Llamar a la función payable del contrato
        const tx = await karaokeContract.vote(singerId, {
            value: amountWei // Enviar ETH con la transacción
        });
        
        txnHashDiv.innerHTML = `Transacción enviada: <a href="https://moonbase.moonscan.io/tx/${tx.hash}" target="_blank">${tx.hash.substring(0, 10)}...</a>`;
        
        // Esperar confirmación
        await tx.wait();
        txnHashDiv.innerHTML = "¡Voto registrado exitosamente!";
        
        // Limpiar input
        document.getElementById("voteAmount").value = "";
        
        // Actualizar UI
        await updateBalance();
        await loadResults();
        
        // Restaurar botón
        setTimeout(() => {
            voteButton.textContent = originalText;
            voteButton.disabled = false;
            txnHashDiv.innerHTML = "";
        }, 3000);
        
    } catch (error) {
        console.error("Error al votar:", error);
        document.getElementById("voteTxnHash").innerHTML = `Error: ${error.message.substring(0, 100)}...`;
        const voteButton = document.querySelector("#votingControls button");
        voteButton.textContent = "Votar";
        voteButton.disabled = false;
    }
}

// Cargar y mostrar resultados
async function loadResults() {
    try {
        if (!karaokeContract || singersData.length === 0) return;
        
        // Obtener votos para cada cantante
        const results = [];
        for (const singer of singersData) {
            const votesWei = await karaokeContract.getTotalVotes(singer.id);
            const votesEth = parseFloat(ethers.utils.formatEther(votesWei));
            results.push({
                id: singer.id,
                displayName: singer.displayName,
                votes: votesEth
            });
        }
        
        console.log("Resultados:", results);
        
        // Ordenar por votos (descendente)
        results.sort((a, b) => b.votes - a.votes);
        
        // Actualizar gráfico
        updateChart(results);
        
        // Actualizar lista de resultados (opcional, como fallback)
        const resultsList = document.getElementById("resultsList");
        resultsList.innerHTML = "<h4>Clasificación:</h4><ul>" + 
            results.map(r => `<li>${r.displayName}: ${r.votes.toFixed(4)} DEV</li>`).join("") + 
            "</ul>";
        
    } catch (error) {
        console.error("Error al cargar resultados:", error);
    }
}

// Actualizar el gráfico con Chart.js
function updateChart(results) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    
    // Destruir gráfico existente si hay uno
    if (chart) {
        chart.destroy();
    }
    
    // Preparar datos para el gráfico
    const labels = results.map(r => r.displayName);
    const data = results.map(r => r.votes);
    
    // Crear gráfico de barras
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Votos (DEV)',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Ocultar leyenda para simplificar
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(4)} DEV`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Votos (DEV)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Cantantes'
                    }
                }
            }
        }
    });
}

// Inicializar cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
    // Verificar si ya hay una cuenta conectada (opcional)
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
    }
});