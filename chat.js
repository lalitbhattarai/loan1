const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBody = document.querySelector('.chat-body');

let chatOpen = false; // Track chat box state

chatButton.addEventListener('click', () => {
  if (chatOpen) {
    chatBox.style.display = 'none'; // Close chat box
  } else {
    chatBox.style.display = 'block'; // Open chat box
  }
  
  chatOpen = !chatOpen; // Toggle chat box state
});

sendButton.addEventListener('click', () => {
  sendMessage();
});

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    appendMessage('user', messageText);
    respondToMessage(messageText);
    messageInput.value = '';
  }
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender);
  messageElement.textContent = message;
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function respondToMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    let response;
  
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      response = "Hello! How can I assist you with your loan inquiries today?";
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
      response = "Goodbye! Feel free to return if you have more questions in the future.";
    } else if (lowerCaseMessage.includes('personal') || lowerCaseMessage.includes('car')) {
      response = "For more information about personal or car loans, please visit our website or contact our customer service.Please provide us your contaact number or email address.";
    } else if (lowerCaseMessage.includes('interest rates')) {
      response = "Our current interest rates are: Personal Loan - 8.5%, Car Loan - 6.0%, Home Loan - 4.25%.";
    } else if (lowerCaseMessage.includes('application status')) {
      response = "Your loan application is currently under review.";
    } else if (lowerCaseMessage.includes('repayment options')) {
      response = "We offer flexible repayment options tailored to your needs. You can choose from monthly, bi-weekly, or weekly payments.";
    } else if (lowerCaseMessage.includes('loan')) {
      response = "We offer various types of loans including personal loans, car loans, and home loans. Each loan type has different features and eligibility criteria.";
    } else {
      response = "I'm sorry, I couldn't understand your message. Please contact our management team by going to the contact us page.";
    }
  
    setTimeout(() => {
      appendMessage('bot', response);
    }, 500); 
  }
  