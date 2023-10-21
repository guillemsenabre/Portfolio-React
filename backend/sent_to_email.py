from flask import Flask, request, jsonify
import smtplib

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    text = request.json.get('text')
    
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your-email@gmail.com', 'your-email-password')
    
    server.sendmail('your-email@gmail.com', 'recipient-email@example.com', text)
    server.quit()
    
    return jsonify({'message': 'Email sent successfully'}), 200

if __name__ == '__main__':
    app.run(port=3000)
