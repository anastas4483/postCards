<template>
  <ul>
    <li>Main</li>
    <li>Cards</li>
    <li>Profile</li>
  </ul>
</template>

<style>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;

  margin: 0;
  gap: 15px;
  font-size: 18px;
  padding: 0;
  align-items: center;
  color: #fff;
  justify-content: center;
}
li {
  cursor: pointer;
  transition: all ease 0.3s;
}

li:hover {
  text-shadow: 4px 3px 0px #035f93;
  color: #adf1ff;
}
</style>
