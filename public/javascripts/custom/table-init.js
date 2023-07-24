const employeeTable = new DataTable("#employee-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [3, 4] }],
});

const assetTable = new DataTable("#asset-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [5, 6] }],
});

const categoryTable = new DataTable("#category-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [1, 2] }],
});

const issueTable = new DataTable("#issue-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [3] }],
});

const returnTable = new DataTable("#return-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [3] }],
});

const historyTable = new DataTable("#history-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [3] }],
});

const scrapTable = new DataTable("#scrap-table", {
  pageLength: 9,
  columnDefs: [{ orderable: false, targets: [5] }],
});
