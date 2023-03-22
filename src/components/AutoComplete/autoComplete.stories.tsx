import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { AutoComplete } from "./autoComplete";

interface LakerPlayerProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const SimpleComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => {
          return {
            value: item.login,
            ...item,
          };
        });
      });
  };

  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action("selected")}
    ></AutoComplete>
  );
};

storiesOf("AutoComplete Component", module).add("AutoComplete", SimpleComplete);
