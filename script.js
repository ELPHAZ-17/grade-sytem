/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
}

body {
    font-family: Arial, sans-serif;
    background-color:black);
    color: white;
    line-height: 1.6;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: gray;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

header {
    background: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
}

main {
    padding: 20px;
}

.input-group, .subjects {
    margin-bottom: 15px;
}

.input-group label, .subjects label {
    display: block;
    margin-bottom: 5px;
}

.subjects input {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #45a049;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

table, th, td {
    border: 1px solid #ccc;
}

th, td {
    padding: 10px;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 600px) {
    body {
        padding: 10px;
    }

    table, th, td {
        font-size: 14px;
    }
}
