from flask import Flask, render_template, jsonify, request
import pandas as pd
from weather_bee_activity import classify_bee_activity_simple  # your model

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/forecast')
def forecast_page():
    return render_template('forecast.html')

@app.route('/history')
def history_page():
    return render_template('history.html')

@app.route('/nesting')
def nesting_page():
    return render_template('nesting.html')

@app.route('/intervention')
def intervention_page():
    return render_template('intervention.html')


# API ENDPOINTS
@app.route('/api/forecast')
def get_forecast():
    df = pd.read_csv('data/bee_forecast.csv')
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/history')
def get_history():
    start = request.args.get('start')
    end = request.args.get('end')
    df = pd.read_csv('data/bee_history.csv', parse_dates=['date'])
    mask = (df.date >= start) & (df.date <= end)
    return jsonify(df.loc[mask].to_dict(orient='records'))

@app.route('/intervention', methods=['POST'])
def intervention():
    q = request.json.get('question')
    # TODO: Connect to ChatGPT + MCP with landscape/weather context
    return jsonify({'answer': f'Sample reply for: \"{q}\"'})

if __name__ == '__main__':
    app.run(debug=True)

