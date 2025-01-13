 function selectOption(option) {
        const pingInput = document.getElementById('pingInput').value;
        const outputTextarea = document.getElementById('outputTextarea');

        // Helper function to check if the message is already present
        function isMessagePresent(message) {
            return outputTextarea.value.includes(message);
        }
        if (option === 'down') {
            outputTextarea.value = `Hello,\nThis server is down, please try to fix it asap.\n\n${pingInput}\n\nThanks.`;
        } else if (option === 'stillDown') {
            document.getElementById("outputTextarea").value = "";
            const stillDownMessage = `Hello,\nthis server still down until now, Check it again please,\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(stillDownMessage)) {
                outputTextarea.value = `${stillDownMessage}\n\n${outputTextarea.value}`;
            }
        } 
		
		else if (option === 'password') {
            document.getElementById("outputTextarea").value = "";
            const passwordDownMessage = `Hello \n\nPlease provide the correct root password. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(passwordDownMessage)) {
                outputTextarea.value = `${passwordDownMessage}\n\n${outputTextarea.value}`;
            }
        } 
		
		else if (option === 'password') {
            document.getElementById("outputTextarea").value = "";
            const passwordDownMessage = `Hi, \n\nPlease provide the correct root password. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(passwordDownMessage)) {
                outputTextarea.value = `${passwordDownMessage}\n\n${outputTextarea.value}`;
            }
        } 
		
		else if (option === 'ssh') {
            document.getElementById("outputTextarea").value = "";
            const ssh= `Hello, \n\nWe can't access this server via ssh, please fix it asap. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(ssh)) {
                outputTextarea.value = `${ssh}\n\n${outputTextarea.value}`;
            }
        }
				else if (option === 'unstable') {
            document.getElementById("outputTextarea").value = "";
            const unstable= `Hello, \nConnection is unstable. please check and fix it ASAP. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(unstable)) {
                outputTextarea.value = `${unstable}\n\n${outputTextarea.value}`;
            }
        }
		
		else if (option === 'connect') {
            document.getElementById("outputTextarea").value = "";
            const connect= `Hello, \n\nWe can't connect to this server, please try to fix it asap. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(connect)) {
                outputTextarea.value = `${connect}\n\n${outputTextarea.value}`;
            }
        }
		
		else if (option === 'password') {
            document.getElementById("outputTextarea").value = "";
            const passwordDownMessage = `Hi, \n\nPlease provide the correct root password. \n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(passwordDownMessage)) {
                outputTextarea.value = `${passwordDownMessage}\n\n${outputTextarea.value}`;
            }
        } 
        else if (option === 'S1') {
            outputTextarea.value = `Hello,\nPlease change the following RDNS :\n\n${pingInput}\n\nThanks in advance`;
        } else if (option === 'S2') {
            document.getElementById("outputTextarea").value = "";
            const RDNS = `Hi,\nPlease update rDNS\n\n${pingInput}\n\nThanks in advance.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(RDNS)) {
                outputTextarea.value = `${RDNS}\n\n${outputTextarea.value}`;
            }
        }
		else if (option === 'S3') {
            document.getElementById("outputTextarea").value = "";
            const S3= `Hello, \nPlease remove all rDNS records.\n\n${pingInput}\n\nThanks in advance.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(S3)) {
                outputTextarea.value = `${S3}\n\n${outputTextarea.value}`;
            }
        }
		if (option === 'ips') {
            outputTextarea.value = `Hello,\nPlease check these additional ips, they are not working.\n\-----\n\n${pingInput}\n\nThanks.`;
        } else if (option === 'ips2') {
            document.getElementById("outputTextarea").value = "";
            const ips2= `Hello, \nplease check the following additional ips,they are not working.\n-----\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(ips2)) {
                outputTextarea.value = `${ips2}\n\n${outputTextarea.value}`;
            }
        }
                if (option === 'allow1') {
            outputTextarea.value = `Hello,\nplease we need you to allow port25 for in/out traffic for this server\n-----\n\n${pingInput}\n\nThanks.`;
        } else if (option === 'allow2') {
            document.getElementById("outputTextarea").value = "";
            const allow2= `Hi, \nPlease Allow Port25 for outgoing traffic for all ips for this server :\n-----\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(allow2)) {
                outputTextarea.value = `${allow2}\n\n${outputTextarea.value}`;
            }
        }
             if (option === 'SBL') {
            outputTextarea.value = `Hi,\nplease we need you to delist this range from SBL\n-----\n\n${pingInput}\n\nThanks.`;
        } else if (option === 'PBL') {
            document.getElementById("outputTextarea").value = "";
            const PBL= `Hi, \nplease we need you to delist the following IPs from PBL\n-----\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(PBL)) {
                outputTextarea.value = `${PBL}\n\n${outputTextarea.value}`;
            }
        }
		             if (option === 'Speed1') {
            outputTextarea.value = `Hi,\nplease we need you to upgrade the Download/upload speed of this server.\n-----\n\n${pingInput}\n\nThanks.`;
        } else if (option === 'Speed2') {
            document.getElementById("outputTextarea").value = "";
            const Speed2= `Hi, \nStill we have the same issue, we need you to upgrade the Download/upload speed of this server more, it's very slow\n-----\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(Speed2)) {
                outputTextarea.value = `${Speed2}\n\n${outputTextarea.value}`;
            }
        }
		else if (option === 'Speed3') {
            document.getElementById("outputTextarea").value = "";
            const Speed3= `Hello, \nPlease upgrade the network speed of this server , It's very slow :\n-----\n\n${pingInput}\n\nThanks.`;

            // Check if the message is already present before appending
            if (!isMessagePresent(Speed3)) {
                outputTextarea.value = `${Speed3}\n\n${outputTextarea.value}`;
            }
        }
        
    }
    function copyToClipboard() {
        const outputTextarea = document.getElementById('outputTextarea');
        outputTextarea.select();
        document.execCommand('copy');
    }

    function clearFields() {
        document.getElementById("pingInput").value = "";
        document.getElementById("outputTextarea").value = "";
    }
	//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateCommaSeparated);

    function generateCommaSeparated() {
        const inputText = document.getElementById("input-text").value;
        const ipLines = inputText.split("\n");

        const validIps = ipLines.map(line => line.split(" ")[0])
            .filter(ip => isValidIp(ip));

        const commaSeparatedIps = validIps.join(",");
        document.getElementById("output-text").value = commaSeparatedIps;
    }

    function isValidIp(ip) {
        const parts = ip.split(".");
        return parts.length === 4 && parts.every(part => !isNaN(part) && parseInt(part) >= 0 && parseInt(part) <= 255);
    }
});
document.addEventListener("DOMContentLoaded", 
    function ()  {
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", generateCommaSeparated);

    // Toggle between light and dark modes
   

    function generateCommaSeparated() {
        // Your existing code for generating comma-separated IPs
    }

    function isValidIp(ip) {
        // Your existing code for validating IP addresses
    }

	
});
			////////////////////////////////////////////////////////////////////////////////////////////
			function convert() {
    var inputTextArea = document.getElementById('inputTextarea');
    var outputTextArea = document.getElementById('outputTextarea');
    
    var inputText = inputTextArea.value.trim();
    var lines = inputText.split('\n');
    
    var outputText = '';
    lines.forEach(function(line) {
        var parts = line.split(',');
        if(parts.length === 2) {
            var domain = parts[0].trim();
            var ip = parts[1].trim();
            outputText += ip.split('.').reverse().join('.') + '.in-addr.arpa. IN PTR ' + domain + '.\n';
        }
    });
    
    outputTextArea.value = outputText.trim();
}

function copyToClipboard() {
    var outputTextArea = document.getElementById('outputTextarea');
    outputTextArea.select();
    document.execCommand('copy');
}

function ptr() {
    var inputTextArea = document.getElementById('inputTextarea');
    var outputTextArea = document.getElementById('outputTextarea');
    
    var inputText = inputTextArea.value.trim();
    var lines = inputText.split('\n');
    
    var outputText = '';
    lines.forEach(function(line) {
        var parts = line.split(',');
        if(parts.length === 2) {
            var domain = parts[0].trim();
            var ipParts = parts[1].trim().split('.');
            var ip = ipParts[ipParts.length - 1] + '.' + ipParts[ipParts.length - 2];
            outputText += ip + ' IN PTR ' + domain +'.\n';
        }
    });
    
    outputTextArea.value = outputText.trim();
}
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
