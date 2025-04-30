#!/bin/bash
# Script pentru a crea structura de directoare și fișiere pentru un proiect Node.js

#chmod +x setup_node_structure.sh
#./setup_node_structure.sh

# Numele directorului principal
PROJECT_NAME="node_app"
# Creăm structura de directoare
mkdir -p ./views



# Creăm fișierele necesare
touch server.js
touch layout.js
touch views/head.html
touch views/header.html
touch views/footer.html
touch views/acasa.html
touch views/despre.html

echo "✅ Structura proiectului '$PROJECT_NAME' a fost creată cu succes!"
