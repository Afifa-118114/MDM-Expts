<?php
$servername = "localhost";
$username = "root";
$password = "<@MySQL0>";
$dbname = "real_time_search";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$q = isset($_GET['q']) ? $_GET['q'] : '';

$stmt = $conn->prepare("SELECT name, category FROM items WHERE name LIKE ?");
$searchTerm = "%$q%";
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "<ul>";  // Open ul before loop
    while($row = $result->fetch_assoc()) {
        $name = htmlspecialchars($row['name']);
        $category = trim($row['category']);

        // Highlight typed letters safely
        if ($q !== '') {
            $pattern = "/" . preg_quote($q, "/") . "/i";
            $name = preg_replace($pattern, "<span style='background:yellow;'>$0</span>", $name);
        }

        echo "<li class='{$category}'>{$name} - {$category}</li>";
    }
    echo "</ul>"; // Close ul after loop
} else {
    echo "<p>No results found</p>";
}

$stmt->close();
$conn->close();
?>