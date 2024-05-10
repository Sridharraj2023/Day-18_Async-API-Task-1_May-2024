let url = "https://isro.vercel.app/api/customer_satellites";

async function display() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        
        // Check if data is an array
        if (Array.isArray(data.customer_satellites)) { // Check if data.customer_satellites exists and is an array
            let root = document.getElementById("root");
            data.customer_satellites.forEach((e, i) => { // Iterate over data.customer_satellites
                let div = document.createElement("div");
                div.innerHTML = `
                    <div class="card" style="width: 18rem;padding: 15px; margin: 10px;">
                        <div class="card-body" style="text-align: center;">
                            <h5 class="card-title">${e.id}</h5>
                            <p class="card-text">${e.country}</p>
                            <div>${e.launch_date}</div>
                            <div>${e.mass}</div>
                            <div>${e.launcher}</div>
                        </div>
                    </div>`;
                root.appendChild(div);
            });
        } else {
            console.error("Data is not an array or does not contain customer_satellites");
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the display function
display();
