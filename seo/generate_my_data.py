import xml.etree.ElementTree as ET
import csv

# Load the sitemap XML
sitemap_file = "sitemap.xml"
csv_file = "my_data.csv"

# Parse XML
tree = ET.parse(sitemap_file)
root = tree.getroot()

# Define namespace
namespace = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}

data = []
for url in root.findall("ns:url", namespace):
    loc = url.find("ns:loc", namespace).text
    lastmod = url.find("ns:lastmod", namespace).text[:10]  # take only the date part (YYYY-MM-DD)
    data.append([loc, lastmod])

# Write data to CSV
with open(csv_file, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["URL", "Date"])
    writer.writerows(data)

print(f"CSV file '{csv_file}' created successfully.")
