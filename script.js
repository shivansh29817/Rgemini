// Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GEMINI_API_KEY = 'AIzaSyCIgcXZQwNM6V1BUSWZl2OYa_6LG-tp9oY';
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    
    if (userMessage.trim() === '') return;

    displayMessage('You', userMessage, 'user');
    userInput.value = '';

    // Call the Gemini API (replace this with actual API call logic)
    const aiResponse = getGeminiApiResponse(userMessage);

    displayMessage('AI', aiResponse, 'ai');
}

function displayMessage(sender, message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', type);
    messageContainer.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageContainer);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Replace this function with actual API call logic
function getGeminiApiResponse(userMessage) {
    // This is a placeholder function; implement your API call here
    // You may use technologies like fetch or axios for API calls
    // Make sure to handle the API response appropriately
    return 'This is a placeholder AI response.';
}
