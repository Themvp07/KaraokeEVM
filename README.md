# Karaoke Blockchain Voting App

[![Moonbase Alpha](https://img.shields.io/badge/Moonbase%20Alpha-Testnet-blueviolet)](https://docs.moonbeam.network/builders/get-started/networks/moonbase/)
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.20-blue)](https://soliditylang.org/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-v5-blue)](https://docs.ethers.io/v5/)

This project is a decentralized web application (dApp) that allows users to participate in a karaoke contest by voting for their favorite singers using the native token (DEV) of the Moonbase Alpha testnet.

## Features

*   **MetaMask Connection**: Easily connect your MetaMask wallet to the Moonbase Alpha network.
*   **Singer Registration (Admin)**: A designated admin account can register new singers by providing their name. The system automatically generates a unique `bytes32` ID for each singer, keeping their real name hidden on the UI (though it's stored on the blockchain).
*   **Voting with DEV**: Any connected user can vote for a selected singer. Voting is done by transferring a specific amount of DEV tokens to the contract.
*   **Real-time Results Display**: The application displays voting results in an interactive bar chart (using Chart.js) and a ranked list. Results update automatically when new singers are registered or votes are cast.
*   **Responsive and Attractive Design**: A modern and visually appealing UI with a color theme inspired by purple and pink tones.

## Technologies Used

*   **Frontend**: HTML, CSS, JavaScript
*   **Web3 Library**: Ethers.js v5
*   **Graphics**: Chart.js
*   **Smart Contract**: Solidity (^0.8.20)
*   **Blockchain**: Moonbase Alpha Testnet
*   **Wallet**: MetaMask

## Project Structure

The project structure includes:

*   `index.html`: Main application page.
*   `style.css`: Stylesheet file for the application.
*   `interect2.js`: Frontend logic, including interaction with the smart contract and UI management.
*   `Solidity Smart Contract`: The source code for your `KaraokeVoting` contract (e.g., `Karaoke.sol`).

## Deployment

1.  **Compile and deploy the smart contract** (e.g., `Karaoke.sol`) on the Moonbase Alpha network. Make sure to note the contract address.
2.  **Update the constants in the JavaScript file** (`interect2.js`):
    *   `KARAOKE_CONTRACT_ADDRESS`: Set to the deployed contract address.
    *   `OWNER_ADDRESS`: Set to the address of the account that deployed the contract (the one with admin permissions to register singers).
    *   `KARAOKE_ABI`: Ensure it matches the ABI generated when compiling your contract.
3.  **Serve the frontend files** (`index.html`, `style.css`, `interect2.js`) using a local web server or upload them to a static hosting service.
4.  **Open `index.html` in your browser** and connect using MetaMask on the Moonbase Alpha network.

## How to Use

1.  **Connect Wallet**: Click "Conectar con MetaMask" and ensure you are on the Moonbase Alpha network.
2.  **(Admin) Register Singers**: If your account is the admin, a section will appear to enter a new singer's name and register them.
3.  **Vote**: Select a singer from the dropdown list, enter the amount of DEV you want to vote, and click "Votar". Confirm the transaction in MetaMask.
4.  **View Results**: Watch the chart and leaderboard update in real-time.

## License

This project is licensed under the MIT License.

---

# Aplicación de Votación de Karaoke en Blockchain

[![Moonbase Alpha](https://img.shields.io/badge/Moonbase%20Alpha-Testnet-blueviolet)](https://docs.moonbeam.network/builders/get-started/networks/moonbase/)
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.20-blue)](https://soliditylang.org/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-v5-blue)](https://docs.ethers.io/v5/)

Este proyecto es una aplicación web descentralizada (dApp) que permite a los usuarios participar en un concurso de karaoke votando por sus cantantes favoritos utilizando el token nativo (DEV) de la red de prueba Moonbase Alpha.

## Características

*   **Conexión con MetaMask**: Conecta fácilmente tu billetera MetaMask a la red Moonbase Alpha.
*   **Registro de Cantantes (Administrador)**: Una cuenta designada como administrador puede registrar nuevos cantantes proporcionando su nombre. El sistema genera automáticamente un ID único (`bytes32`) para cada cantante, manteniendo su nombre real oculto en la interfaz de usuario (aunque se almacena en la blockchain).
*   **Votación con DEV**: Cualquier usuario conectado puede votar por un cantante seleccionado. El voto se realiza transfiriendo una cantidad específica de tokens DEV al contrato.
*   **Visualización de Resultados en Tiempo Real**: La aplicación muestra los resultados de la votación en un gráfico de barras interactivo (usando Chart.js) y en una lista clasificada. Los resultados se actualizan automáticamente cuando se registran nuevos cantantes o se emiten votos.
*   **Diseño Responsivo y Atractivo**: Interfaz de usuario moderna y visualmente atractiva con un tema de colores inspirado en tonos púrpuras y rosas.

## Tecnologías Utilizadas

*   **Frontend**: HTML, CSS, JavaScript
*   **Web3 Library**: Ethers.js v5
*   **Gráficos**: Chart.js
*   **Smart Contract**: Solidity (^0.8.20)
*   **Blockchain**: Moonbase Alpha Testnet
*   **Wallet**: MetaMask

## Estructura del Proyecto

La estructura del proyecto incluye:

*   `index.html`: Página principal de la aplicación.
*   `style.css`: Archivo de estilos para la aplicación.
*   `interect2.js`: Lógica del frontend, incluyendo la interacción con el contrato inteligente y la gestión de la interfaz de usuario.
*   `Solidity Smart Contract`: El código fuente de tu contrato `KaraokeVoting` (por ejemplo, `Karaoke.sol`).

## Despliegue

1.  **Compila e implementa el contrato inteligente** (por ejemplo, `Karaoke.sol`) en la red Moonbase Alpha. Asegúrate de anotar la dirección del contrato.
2.  **Actualiza las constantes en el archivo JavaScript** (`interect2.js`):
    *   `KARAOKE_CONTRACT_ADDRESS`: Establece la dirección del contrato desplegado.
    *   `OWNER_ADDRESS`: Establece la dirección de la cuenta que desplegó el contrato (la que tendrá permisos de administrador para registrar cantantes).
    *   `KARAOKE_ABI`: Asegúrate de que coincida con el ABI generado al compilar tu contrato.
3.  **Sirve los archivos frontend** (`index.html`, `style.css`, `interect2.js`) usando un servidor web local o súbelos a un servicio de hosting estático.
4.  **Abre `index.html` en tu navegador** y conéctate usando MetaMask en la red Moonbase Alpha.

## Cómo Usar

1.  **Conectar Cartera**: Haz clic en "Conectar con MetaMask" y asegúrate de estar en la red Moonbase Alpha.
2.  **(Administrador) Registrar Cantantes**: Si tu cuenta es la del administrador, aparecerá una sección para ingresar el nombre de un nuevo cantante y registrarlo.
3.  **Votar**: Selecciona un cantante de la lista desplegable, ingresa la cantidad de DEV que deseas votar y haz clic en "Votar". Confirma la transacción en MetaMask.
4.  **Ver Resultados**: Observa cómo se actualizan el gráfico y la lista de clasificación en tiempo real.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
