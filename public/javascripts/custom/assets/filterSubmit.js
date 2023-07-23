function handleFilterToggle(event) {
  event.preventDefault();
  const filterTrigger = event.currentTarget;
  const active = filterTrigger.value;
  const filters = { filterBy: active };
  queries = new URLSearchParams(filters).toString();
  const url = `/assets?${queries}`;
  fetch(url, { method: "get" }).then(() => location.assign(url));
}
