<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
    <title>Restaurant Menu</title>
    <style>
        table {
            border-collapse: collapse;
            width: 60%;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: orange;
            color: white;
        }
    </style>
</head>

<body>
    <h2>Restaurant Menu</h2>

    <table>
        <tr>
            <th>Dish Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Availability</th>
        </tr>

        <xsl:for-each select="menu/item">
            <tr>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="category"/></td>
                <td><xsl:value-of select="price"/></td>
                <td><xsl:value-of select="availability"/></td>
            </tr>
        </xsl:for-each>

    </table>

</body>
</html>

</xsl:template>

</xsl:stylesheet>