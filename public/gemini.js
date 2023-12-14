const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatLog = document.getElementById('chat-log'); // Assuming you have an element with the ID 'chat-log'

sendButton.addEventListener('click', async function () {
  const prompt = userInput.value;

  try {
    const response = await fetch('/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `userInput=${encodeURIComponent(prompt)}`,
    });

    const result = await response.json();
    const text = result.response;

    console.log(text);

    const messageElement = document.createElement('div');
    messageElement.innerText = text;
    chatLog.appendChild(messageElement);
  } catch (error) {
    console.error('Error fetching or processing response:', error);
  }
});
