Question 1--
Relationship between "Product" and "Product_Category"

Ans--
The relationship between the "Product" and "Product_Category" entities is established through the category_id field in the "Product" schema. This field is defined as a reference to the "ProductCategory" model, linking each product to a specific category. In simpler terms, each product document in the "Product" collection contains a category_id that points to the  _id field of a document in the "ProductCategory" collection.





Question 2--
How could you ensure that each product in the "Product" table has a valid category assigned to it?

Ans--
To ensure that each product in the "Product" collection has a valid category assigned to it, you can leverage Mongoose validation features. Specifically, you can use the required option in the "Product" schema for the category_id field. Here how you can modify the "ProductSchema" to enforce this requirement. By adding required: true to the category_id field, you are ensuring that every new product document must have a valid reference to a document in the "ProductCategory" collection. If a product is attempted to be created without a valid category, Mongoose will throw a validation error, preventing the insertion of such documents into the database.


