export async function handleClick(
  setter,
  user_arr,
  arr_index = -1,
  refresh = false
) {
  let fetchAmount = refresh ? user_arr.length : 1;
  let response = await fetch(
    `https://tinyfac.es/api/data?limit=${fetchAmount}&quality=0`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  let data = await response.json();

  if (refresh) {
    let new_arr = [];
    for (let user of data) {
      new_arr.push({ id: user.id, url: user.url });
    }
    setter(new_arr);
  } else {
    let user = { id: data[0].id, url: data[0].url };
    let new_arr = [...user_arr];

    if (arr_index !== -1) new_arr[arr_index] = user;
    else new_arr.push(user);
    setter(new_arr);
  }
}
