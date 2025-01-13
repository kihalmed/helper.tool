

/////////////////////////////////////////////////////////////////////////////////
 function extractContent() {
      const input = document.getElementById("textInput").value;

      const lines = input.split('\n').map(line => line.trim()).filter(line => line);

      const zipCodes = new Set();
      const cities = new Set();
      const states = new Set();

      lines.forEach(line => {
        if (/^\d{5}$/.test(line)) {
          zipCodes.add(line);
        } else if (/^[^,]+,\s?[A-Z]{2}$/.test(line)) {
          const parts = line.split(',');
          const city = parts[0].trim();
          const state = parts[1].trim();
          cities.add(city);
          states.add(state);
        }
      });

      document.getElementById("zipCodes").value = Array.from(zipCodes).join('\n');
      document.getElementById("cities").value = Array.from(cities).join('\n');
      document.getElementById("states").value = Array.from(states).join('\n');
    }

    async function copyToClipboard(elementId, button, type) {
      const textArea = document.getElementById(elementId);
      const notification = button.nextElementSibling;

      if (textArea.value.trim() === "") {
        notification.textContent = "There's no results to copy 😑";
        notification.classList.add("notification-empty", "show");

        setTimeout(() => {
          notification.classList.remove("show", "notification-empty");
        }, 800);
      } else {
        const count = textArea.value.split('\n').length;
        try {
          await navigator.clipboard.writeText(textArea.value);
          notification.textContent = `${count} ${type === 'zip' ? 'Zip Codes' : type === 'city' ? 'Cities' : 'States'} Copied 😊`;
          notification.classList.remove("notification-empty");
          notification.classList.add("show");

          setTimeout(() => {
            notification.classList.remove("show");
          }, 800);
        } catch (error) {
          console.error('Failed to copy text: ', error);
        }
      }
    }
	////////////////////////////////////////////////////////////////////////
	async function testIPs() {
            const input = document.getElementById('ipInput').value;
            const ipList = input.split(',').map(ip => ip.trim());
            const tableBody = document.querySelector('#resultsTable tbody');
            tableBody.innerHTML = '';

            for (const ip of ipList) {
                if (!ip) continue;

                const row = document.createElement('tr');
                const ipCell = document.createElement('td');
                ipCell.textContent = ip;
                row.appendChild(ipCell);

                try {
                    const response = await fetch('http://localhost:5000/test', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ip })
                    });

                    const { ping, port22, port22122 } = await response.json();

                    row.appendChild(createCell(ping));
                    row.appendChild(createCell(port22));
                    row.appendChild(createCell(port22122));
                } catch (error) {
                    row.appendChild(createCell('Error', 'error'));
                    row.appendChild(createCell('Error', 'error'));
                    row.appendChild(createCell('Error', 'error'));
                }

                tableBody.appendChild(row);
            }
        }

        function createCell(text, className = '') {
            const cell = document.createElement('td');
            cell.textContent = text;
            if (className) cell.className = className;
            return cell;
        }
		///////////////////////////////////////////////////////////////////////
		        document.getElementById('extractButton').addEventListener('click', function() {
            const inputText = document.getElementById('inputText').value;
            const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
            const matches = inputText.match(ipRegex) || [];
            document.getElementById('output').value = matches.join('\n');
        });

        document.getElementById('copyButton').addEventListener('click', function() {
            const outputText = document.getElementById('output');
            outputText.select();
            document.execCommand('copy');
           
        });
