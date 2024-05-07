var gre = [[130, 130, 130, 131, 134, 136, 138, 140, 142, 143, 145, 146, 147, 148, 150, 151], [130, 130, 131, 134, 136, 138, 140, 142, 143, 145, 146, 147, 148, 150, 151, 152], [130, 131, 134, 136, 138, 140, 142, 143, 145, 146, 147, 148, 150, 151, 152, 153], [131, 134, 136, 138, 140, 142, 143, 145, 146, 147, 148, 150, 151, 152, 153, 154], [134, 136, 138, 140, 142, 143, 145, 146, 147, 148, 150, 151, 152, 153, 154, 155], [141, 143, 144, 146, 147, 149, 150, 151, 152, 153, 154, 155, 156, 157, 159, 160], [143, 144, 146, 147, 149, 150, 151, 153, 153, 154, 155, 156, 157, 159, 160, 161], [144, 146, 147, 149, 150, 151, 153, 153, 154, 155, 156, 157, 159, 160, 161, 162], [146, 147, 149, 150, 151, 153, 153, 154, 155, 156, 157, 159, 160, 161, 162, 164], [149, 150, 152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 165, 166, 168], [150, 152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 165, 166, 168, 169], [152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 165, 166, 168, 169, 170], [153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 165, 166, 168, 169, 170, 170]]

document.getElementById("submit").addEventListener("click", function () {
    // Retrieve inputs and parse them as integers
    var vs1 = parseInt(document.getElementById("vs1").value);
    var vs2 = parseInt(document.getElementById("vs2").value);
    var qs1 = parseInt(document.getElementById("qs1").value);
    var qs2 = parseInt(document.getElementById("qs2").value);

    // Define acceptable ranges
    var vs1Min = 0, vs1Max = 12;
    var vs2Min = 0, vs2Max = 15;
    var qs1Min = 0, qs1Max = 12;
    var qs2Min = 0, qs2Max = 15;

    // Validate input values
    if (
        isNaN(vs1) || isNaN(vs2) || isNaN(qs1) || isNaN(qs2) ||
        vs1 < vs1Min || vs1 > vs1Max ||
        vs2 < vs2Min || vs2 > vs2Max ||
        qs1 < qs1Min || qs1 > qs1Max ||
        qs2 < qs2Min || qs2 > qs2Max
    ) {
        // If any value is out of range, show an error message
        document.getElementById("result").innerHTML = `
            <div class="alert alert-danger" role="alert">
                Invalid input! Please ensure the following:
                <ul>
                    <li>Verbal Section 1: ${vs1Min}-${vs1Max} correct answers</li>
                    <li>Verbal Section 2: ${vs2Min}-${vs2Max} correct answers</li>
                    <li>Quant Section 1: ${qs1Min}-${qs1Max} correct answers</li>
                    <li>Quant Section 2: ${qs2Min}-${qs2Max} correct answers</li>
                </ul>
            </div>`;
        document.getElementById("image-container").innerHTML = "";
        return;
    }

    // Calculate scores based on inputs
    var verbal = gre[vs1][vs2];
    var quant = gre[qs1][qs2];
    var total = verbal + quant;

    // Create a table to show the results
    var table = document.createElement("table");
    table.className = "table table-bordered mt-3";

    var thead = document.createElement("thead");
    thead.className = "thead-dark";

    var headerRow = document.createElement("tr");

    var thType = document.createElement("th");
    thType.scope = "col";
    thType.textContent = "Score Type";

    var thScore = document.createElement("th");
    thScore.scope = "col";
    thScore.textContent = "Score";

    headerRow.appendChild(thType);
    headerRow.appendChild(thScore);
    thead.appendChild(headerRow);

    var tbody = document.createElement("tbody");

    // Adding rows to the table body
    var scores = [
        ["Verbal", verbal],
        ["Quant", quant],
        ["Total", total]
    ];

    scores.forEach(([type, score]) => {
        var row = document.createElement("tr");

        var tdType = document.createElement("td");
        tdType.textContent = type;

        var tdScore = document.createElement("td");
        tdScore.textContent = score;

        row.appendChild(tdType);
        row.appendChild(tdScore);
        tbody.appendChild(row);
    });

    // Build the table and update the DOM
    table.appendChild(thead);
    table.appendChild(tbody);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.appendChild(table);

    // Add the image to the image-container
    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = `
        <img id="score-image" src="gresc.jpg" alt="Score Image">
    `;
});
