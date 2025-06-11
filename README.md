![MacBook Air - 13 (1)](https://github.com/user-attachments/assets/54fa4479-23d7-4306-9119-436713e2ac8a)
The Round Diagram project offers a powerful and user-friendly interface for visualizing complex data relationships in a circular (pie-like) format. Built with React and D3.js, it enables users to create highly interactive, dynamic diagrams that elegantly represent hierarchical or interconnected data. The application leverages the precision of D3's data-driven rendering with the flexibility of React's component architecture, resulting in responsive, customizable visualizations ideal for analytical, educational, and presentation purposes.

## 📌 Live Demo

### Try it here: [Round Diagram Demo](https://lletov.github.io/round-diagram/)

## User Workflow & Interaction Flow

1. **Accessing the Application**\
The app is accessed via a standard web browser with no need for local installation. This is possible because the app is a client-side Single Page Application (SPA) built with React, meaning the entire UI and logic run within the browser after the initial page load.

2. **Data Input: Uploading CSV Files**\
Users provide data to visualize by uploading CSV files through a file input control. The app uses JavaScript to parse the CSV into usable data structures (arrays/objects) in memory without requiring backend processing, keeping the operation fast and private. **File should have at least one nested points group.**

3. **Data Processing & Visualization**\
Once the CSV is parsed, the data is fed into D3.js-based components, which dynamically generate scalable vector graphics (SVG) representing the circular diagram.
D3 handles calculations for positioning, arcs, labels, and interactive behaviors like tooltips or highlighting. This all happens client-side for smooth and responsive user experience.

4. **Interactivity & Customization**\
Users can interact with diagram elements — such as additional UI controls on the panel enable live customization of the diagram’s sizes.

5. **Performance Considerations**\
Because all processing is client-side, performance depends on the user’s device and browser capabilities. React’s efficient DOM updates and D3’s optimized rendering minimize lag even for moderately complex datasets.

6. **Saving & Exporting**\
Some implementations may offer exporting the current diagram as SVG or PNG images or saving the visualization configuration for later reload.
User can save result by making screenshot on save button click (the area will highlight for better visualization before).

## File structure

The application expects a CSV file that defines data nodes and their relationships (connections) in a circular layout. Each row represents a node with metadata and optionally lists other nodes it is connected to.

CSV example (in .csv file [here](data.csv))
```
Title,Point,Group,Contacts
Point 1,point1,group1,"point2"
Point 2,point2,group2,""
Point 3,point3,group3,""
Point 4,point4,group3,"point3; point5"
Point 5,point5,group4,""
```

Explanation

- Row 1 (Point 1) connects to point2, indicating a relationship.
- Row 4 (Point 4) connects to point3 and point5, indicating multiple links.
- Other rows have empty Contacts, meaning they have no outward links but may still be targets of connections from others.

 Notes
- Delimiter: Comma (,), with Contacts values wrapped in quotes if they include semicolons.
- Contacts Format: Use ; to separate multiple contact Point values.
- Uniqueness: Point values must be unique and match across the file for relationships to resolve.
- Optional Fields: Only Contacts may be empty. All other fields are required for each node.

The Round Diagram supports one level of nesting in its data hierarchy. This constraint affects how you organize your data into groups and points.

✅ Supported

    Points only: A flat structure where each node is a point with optional connections.

    Points grouped by one-level categories: Each point belongs to a single group, and the diagram clusters points by these groups.

❌ Not Supported

    Groups within groups: Multi-level or hierarchical group nesting (e.g., subgroups inside groups) is not supported.

    Deep trees or multilevel taxonomies: The structure should remain flat beyond the group level.

## Features

- **Interactive Diagrams**: Users can interact with diagrams to explore data relationships.
- **Dynamic Data Binding**: Easily bind data to diagram elements for real-time updates.
- **Customizable Styles**: Adjust diagram sizes through customizable styles.
- **Data Import**: Import data from CSV files to generate diagrams.

## Technology Stack

- **Frontend**: React, D3.js
- **Styling**: CSS
- **Data Handling**: CSV parsing

## 💻 Responsiveness & environment

The Round Diagram app is primarily designed and optimized for use on desktop devices.

| Feature / Behavior             | < 800 px (Mobile) | > 800 px (Desktop) |
|-------------------------------|-------------------|---------------------|
| App start page                | ✅                | ✅                  |
| Diagram working with          | ❌                | ✅                  |

## Use Cases

- Visual summaries on dashboards
- Simple data breakdowns in web UIs
- Infographics or visual reports
- Educational tools or portfolio demos


## Contact

Feel free to connect with me:
- **GitHub:** [lletov](https://github.com/lletov)

---

⭐ If you like this project, don't forget to star the repository!
