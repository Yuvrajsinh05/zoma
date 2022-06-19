// Page 1
# List of city
>>http://localhost:9705/location
>>https://restapiiiiii.herokuapp.com/location

# List of reasturant
>>http://localhost:9705/restaurants
>>https://restapiiiiii.herokuapp.com/restaurants

# List of reasturant wrt city
>>https://zapiii.herokuapp.com/restaurants?state_id=4
>>https://restapiiiiii.herokuapp.com/restaurants?state_id=4

# list of type of mealType
>> http://localhost:9705/quicksearch
>> https://restapiiiiii.herokuapp.com/quicksearch

// Page 2
# List of reasturant on basis of meal
>>http://localhost:9705/restaurants?meal_id=4
>>https://restapiiiiii.herokuapp.com/restaurants?meal_id=4

# Filter on basis of cuisine
>> https://restapiiiiii.herokuapp.com/filters/3?cuisineId=1
>> http://localhost:9705/filters/3?cuisineId=4

# Filter on basis of cost
>>https://restapiiiiii.herokuapp.com/filters/1?lcost=300&hcost=900
>> http://localhost:9705/filters/1?lcost=300&hcost=900

# Sort (low to High)
>>C/1?lcost=300&hcost=900
>>http://localhost:9705/filters/1?cuisineId=4&sort=-1

// Page 3 
 # Details of reasturants
 >>https://restapiiiiii.herokuapp.com/details/2
 >>http://localhost:9705/details/2
 

 # menu on the basis of reasturant
 >> http://localhost:9705/menu?restId=8
 >>https://restapiiiiii.herokuapp.com/menu?restId=8

//page4 
> Menu details of item selected
(post) > localhost:9705/menuItem
 >  https://restapiiiiii.herokuapp.com/menuItem
(body) > [1,4,7]

> Place Order
(post) > localhost:9705/placeOrder
>  https://restapiiiiii.herokuapp.com/placeOrder
(body) > 
  {
        "name": "uvvv",
        "email": "yuv554@gmail.com",
        "adress": "cdce 15 sector",
        "phone": 45554455,
        "cost": 242,
        "menuItem": [7, 1, 5],
        "status": "pending"
    }

// page5
# See all order place
>> localhost:9705/viewOrder
>>https://restapiiiiii.herokuapp.com/viewOrder

# Get Order on basis of emailId
>> localhost:9705/viewOrder?email=yuv554@gmail.com
>>https://restapiiiiii.herokuapp.com/viewOrder?email=yuv554@gmail.com

## update order
(put) localhost:9705/updateOrder/62514d42f5aec503b2e0f2a9
>https://restapiiiiii.herokuapp.com/updateOrder/62514d42f5aec503b2e0f2a9
(body) 
{
	"status":"In Transit",
    "bankName":"Axis Bank"
}


