# Backend für raptor trails

Hier findet man den Zugang für Raptor-Trails.


## 1 GET All trails 
### tested ✔️
GET http://localhost:4000/api/trails

Content-Type: application/json

## 2 GET trail
### dev 🔧
GET http://localhost:4000/api/trails/1

Content-Type: application/json

## 3 Add trail
### tested ✔️
POST http://localhost:4000/api/trails

Content-Type: application/json

´´´
{
    "trail": "Whatsup Batman",
    "trailID": "2",
    "author": "Batwoman"
}
´´´

## In Development:

## 4 Update trail API 
### In development 🔧
PUT http://localhost:4000/api/trails/1

Content-Type: application/json

´´´
{
    "trail": "Master Wayne",
    "trailID": "1",
    "author": "Wayne"
}
´´´

## 5 Delete trail API 
### In development 🔧
DELETE http://localhost:4000/api/trails/1

Content-Type: application/json