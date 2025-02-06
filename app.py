from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock user data (Replace with Database later)
users = {"test@gmail.com": "password123"}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        # Check user authentication
        if email in users and users[email] == password:
            return redirect(url_for("dashboard"))  # Redirect to dashboard
        else:
            return render_template("login.html", error="Invalid Credentials")

    return render_template("login.html")

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')  

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/currency-converter')
def currency_converter():
    return render_template('currency_converter.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
