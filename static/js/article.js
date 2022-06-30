async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "vaylon") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
  const articles = result.data.user.publication.posts;
  let section = document.getElementById("blog");
  section.classList.remove("d-none");
  let container = document.getElementById("content");

  let latest_article = articles[0];
  let title = document.createElement("h2");
  title.innerText = latest_article.title;

  let brief = document.createElement("p");
  brief.innerText = latest_article.brief;

  let link = document.createElement("a");
  link.innerText = "Read more...";
  link.href = `https://blog.vaylonfernandes.me/${latest_article.slug}`;

  container.appendChild(title);
  container.appendChild(brief);
  container.appendChild(link);
});
