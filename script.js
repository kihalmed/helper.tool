 async function fetchPrayerTimes() {
        try {
            // Replace this with the actual API endpoint or scraping logic if needed
            const response = await fetch('https://lematin.ma/horaire-priere/tanger'); 
            
            if (!response.ok) {
                throw new Error('Failed to fetch prayer times');
            }

            const htmlText = await response.text();

            // Parse the response (simple regex or DOM parsing for specific prayer times)
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            const timings = {
                'as-sobh': doc.querySelector('selector-for-as-sobh')?.innerText || 'N/A',
                'al-chourouq': doc.querySelector('selector-for-al-chourouq')?.innerText || 'N/A',
                'ad-dohr': doc.querySelector('selector-for-ad-dohr')?.innerText || 'N/A',
                'al-asr': doc.querySelector('selector-for-al-asr')?.innerText || 'N/A',
                'al-maghrib': doc.querySelector('selector-for-al-maghrib')?.innerText || 'N/A',
                'al-ichae': doc.querySelector('selector-for-al-ichae')?.innerText || 'N/A',
            };

            // Update the UI with fetched times
            Object.keys(timings).forEach(id => {
                document.getElementById(id).innerText = timings[id];
            });
        } catch (error) {
            console.error('Error fetching prayer times:', error);
        }
    }

    // Call the function on load

        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const logo = document.querySelector('.logo');
            sidebar.classList.toggle('hidden');
            logo.classList.toggle('hidden');
        }

        function loadPage(link) {
            // Update the iframe source to load the selected page
            const iframe = document.getElementById('content-frame');
            iframe.src = link;

            // Update active class
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => item.classList.remove('active'));

            // Set active state for the clicked item
            const clickedItem = [...menuItems].find(item => item.outerHTML.includes(link));
            if (clickedItem) {
                clickedItem.classList.add('active');
            }
        }
////////////////////////////////////////////////////////////////////////////////////

		/////////////////////////////////////////////////////////////////////////////
