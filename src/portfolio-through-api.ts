import { DataVal, useGetRepositoryQuery } from "./features/repos";
import { useEffect, useState } from "react";

const [repos, setRepos] = useState<DataVal | undefined>();

useEffect(() => {
  const fetchData = async () => {
    const { data } = await useGetRepositoryQuery({
      owner: "darpanvats007",
      name: "job-posting",
    });

    setRepos(data);
    // TODO populate with github data
  };

  fetchData();
}, []);

console.log(repos);
