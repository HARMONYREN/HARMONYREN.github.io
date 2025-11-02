async function list_repos(org_slug, org_display_name) {
  const res = await fetch(`https://api.github.com/orgs/${org_slug}/repos?per_page=100`);

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status}`);
    return;
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    console.error("Expected an array, got:", data);
    return;
  }

  const container = document.getElementById("projects");

  const header = document.createElement("h1");
  header.textContent = `${org_display_name} Projects`;
  container.appendChild(header);

  data.forEach(repo => {
    const div = document.createElement("div");
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.textContent = repo.name;
    link.style.fontWeight = "bold";
    const text = document.createTextNode(`: ${repo.description || ""}`);
    div.appendChild(link);
    div.appendChild(text);
    container.appendChild(div);
  });

  container.appendChild(document.createElement("hr"));
}
