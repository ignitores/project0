## API Reference

- #### Add New Cake

```
  POST http://localhost:8000/cake/newcake
```

---

- #### Update cake information by id

```
  PUT http://localhost:8000/cake/updateCake/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** Id of cake to Update |

---

- ### Delete cake information by id

```
  DELETE http://localhost:8000/cake/deleteCake/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** Id of cake to Delete |

---

- ### get all cake info by flavour

```
  GET http://localhost:8000/cake/cakesByFlavour/${flavour}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `flavour` | `string` | **Required** flavour of cake to fetch |

---

- ### get all cake info by orders (most ordered to least ordered)

```
  GET http://localhost:8000/cake/cakeByOrder
```

---

- ### get all cake info by tags

```
  GET  http://localhost:8000/cake/cakesByTags/${tags}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `tags`    | `string` | **Required** tags of cake to fetch |

---

- ### get cake info by ID

```
  GET  http://localhost:8000/cake/cakeByID/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required** id of cake to fetch |

---

- ### get all cakes

```
  GET  http://localhost:8000/cake/allcakes
```

---

- ### get cakes by Review

```
  GET  http://localhost:8000/cake/mostReviewed
```

---

- ### get cakes by Recentness

```
  GET  http://localhost:8000/cake/recentness
```

---

- ### get cakes by tag also sorted in Desc order by rating

```
  GET http://localhost:8000/cake/cakesByTagsSortedByReviews/${tag}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag`     | `string` | **Required** tag of cake to fetch |

---

- ### get cakes by flavour also sorted in asc order by price

```
  GET http://localhost:8000/cake/cakesByFlavourSortedByPrice/${flavour}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `flavour` | `string` | **Required** flavour of cake to fetch |

---

- ### get cakes by tag also sorted in most to least ordered

```
  GET http://localhost:8000/cake/cakesByTagsSortedByOrders/${tag}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag`     | `string` | **Required** tag of cake to fetch |

---

- ### get cake by flavours and reviews (best to worst reviews)

```
  GET http://localhost:8000/cake/cakesByFlavoursSortedByReviews/${flavour}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `flavour` | `string` | **Required** flavour of cake to fetch |

---

- ### get cake by flavours and orders (most to least)

```
  GET http://localhost:8000/cake/cakesByFlavoursSortByOrders/${flavour}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `flavour` | `string` | **Required** flavour of cake to fetch |

---
