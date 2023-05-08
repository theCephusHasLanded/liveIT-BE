\c snacks_dev;

INSERT INTO snacks (name, calorie, sugar, fat, is_healthy)
VALUES
  ('Popcorn', 130, 0, 6, false),
  ('Cheese Puffs', 160, 2, 10, false),
  ('Chocolate Chip Cookies', 210, 14, 10, false),
  ('Ice Cream', 250, 25, 15, false),
  ('Candy Bar', 280, 30, 14, false),
  ('Potato Chips with Dip', 380, 3, 23, false),
  ('Nachos', 450, 2, 27, false),
  ('Cheeseburger', 540, 9, 29, false),
  ('Fried Chicken', 780, 0, 52, false),
  ('Sausage Pizza', 285, 6, 12, false),
  ('Soft Pretzel with Cheese', 480, 2, 19, false),
  ('Hot Dog with Bun', 310, 5, 18, false),
  ('Chili Cheese Fries', 1010, 5, 65, false),
  ('Milkshake', 520, 60, 21, false),
  ('Deep Fried Oreos', 312, 19, 13, false);
  ('Apple', 95, 19, 0, true),
  ('Banana', 105, 14, 0, true),
  ('Carrot Sticks', 30, 6, 0, true),
  ('Celery Sticks', 10, 1, 0, true),
  ('Grapes', 52, 12, 0, true),
  ('Kiwi', 61, 9, 0, true),
  ('Orange', 62, 12, 0, true),
  ('Pear', 101, 17, 0, true),
  ('Strawberries', 49, 8, 0, true),
  ('Blueberries', 85, 15, 0, true),
  ('Almonds', 160, 1, 14, true),
  ('Cashews', 155, 3, 12, true),
  ('Pistachios', 160, 2, 13, true),
  ('Dark Chocolate', 170, 13, 12, false),
  ('Potato Chips', 152, 1, 10, false);


  INSERT INTO reviews (reviewer, title, content, rating, snack_id)
  VALUES
 ('Michael', 'Not my favorite', 'I found these popcorn to be a bit too plain and boring. I would recommend adding some seasoning to spice.', 3, 1),
('Samantha', 'Surprisingly tasty', 'I wasnt sure what to expect from these cheese puffs, but they are actually really good. They are light and airy, with just the right amount of cheesy flavor.', 4, 2),
('John', 'Classic cookie', 'You cant go wrong with a chocolate chip cookie. These ones are soft and chewy with plenty of chocolate chips. They make for a great snack or dessert.', 5, 3),
('Lena', 'Creamy and delicious', 'I love a good bowl of ice cream, and this one does not disappoint. It is rich and creamy with just the right amount of sweetness.', 5, 4),
('Robert', 'Too sweet for me', 'This candy bar is a bit too sweet for my liking, but it still satisfies my sweet tooth. I would recommend breaking it up into small pieces and savoring each one.', 3, 5),
('Emily', 'Addictive snack', 'These potato chips with dip are so addictive. The salty chips are perfectly complemented by the creamy dip. I have to be careful not to eat the whole bag!', 4, 6),
('Oliver', 'Great for sharing', 'Nachos are a great snack to share with friends. This order is big enough to split between a few people, and the cheesy toppings are delicious.', 4, 7),
('Amanda', 'Classic fast food', 'Sometimes you just crave a good cheeseburger, and this one hits the spot. The patty is juicy and flavorful, and the toppings are fresh.', 4, 8),
('Tom', 'Delicious but not healthy', 'Fried chicken is a guilty pleasure of mine, and this one is particularly tasty. Its crispy and juicy, but I know its not the healthiest choice.', 3, 9),
('Sophie', 'Satisfying pizza', 'This sausage pizza is a great snack when Im craving something savory. The crust is crispy and the toppings are flavorful. Its a bit greasy, but thats part of what makes it so delicious.', 4, 10),
('Jane', 'Perfect for sharing', 'Soft pretzels with cheese are a great snack to share with friends. This one is big enough to split between a few people, and the cheese sauce is tasty and creamy.', 4, 11),
('Harry', 'Classic ballpark snack', 'A hot dog with bun is a classic snack at sporting events, and this one is just as good as any Ive had before. The bun is soft and the hot dog is juicy.', 3, 12),
('Lisa', 'Decadent and delicious', 'These chili cheese fries are a bit of a guilty pleasure for me, but they are so worth it. The fries are crispy and the chili and cheese toppings are rich and flavorful.', 5, 13),
('Michael', 'Indulgent treat', 'A milkshake is a delicious and indulgent treat, and this one is no exception. Its creamy and sweet, with just the right amount of thickness.', 4, 14),
('Emma', 'Sinfully good', 'Deep fried Oreos are a bit of a guilty pleasure for me, but they are so worth it. They are warm and crispy on the outside, with a gooey chocolate center. Definitely not a healthy snack, but sometimes you just have to indulge!', 5, 15)
('Jane', 'Love these apples!', 'I love how fresh and crisp these apples are. They are the perfect snack to satisfy my sweet tooth without making me feel guilty.', 5, 16),
('John', 'Great healthy snack', 'I always keep bananas on hand for a quick and easy snack. They are high in potassium and help keep me full for a long time.', 5, 17),
('Samantha', 'Perfect for a midday snack', 'These carrot sticks are so convenient for when I need a quick and healthy snack. They are crunchy and satisfying without being too filling.', 4, 18),
('Robert', 'A bit bland', 'I found these celery sticks to be a bit bland on their own, but they were great when paired with some peanut butter for added flavor and protein.', 3, 19),
('Emily', 'Delicious grapes!', 'I love the sweet and juicy flavor of these grapes. They are the perfect snack to satisfy my sweet cravings without adding too many calories.', 5, 20),
('Oliver', 'A bit sour for my taste', 'I found these kiwis to be a bit too sour for my liking. I would recommend adding a bit of sugar or honey to balance out the flavor.', 3, 21),
('Amanda', 'Great source of vitamin C', 'Oranges are a great source of vitamin C and make for a refreshing snack. They are easy to peel and eat on the go.', 4, 22),
('George', 'Juicy and sweet', 'These pears are so juicy and sweet. They are a great snack to have when I am craving something sweet but dont want to indulge in something unhealthy.', 5, 23),
('Lena', 'Perfect on top of yogurt', 'I love adding these strawberries to my yogurt for a healthy and delicious snack. They are a great source of vitamin C and antioxidants.', 4, 24),
('Tom', 'Perfect for smoothies', 'I love adding these blueberries to my smoothies for an extra boost of antioxidants. They are also a great snack on their own.', 4, 25),
('Harry', 'Great for a midday snack', 'Almonds are a great source of healthy fats and protein, making them the perfect snack to keep me full until my next meal.', 4, 26),
('Lisa', 'A bit too salty', 'I found these cashews to be a bit too salty for my liking, but they were still a delicious snack. I would recommend rinsing them off before eating to reduce the salt content.', 3, 27),('Sophie', 'Love these pistachios!', 'These pistachios are so delicious and addictive. I love that they come in their own little shell, which makes them a fun snack to eat.', 5, 28),
('David', 'Too sweet for me', 'I found this dark chocolate to be a bit too sweet for my liking. I prefer a darker chocolate with less sugar.', 3, 29),
('Emma', 'Addictive but not healthy', 'I cant get enough of these potato chips, but I know they are not the healthiest snack. I try to limit my consumption to just a handful at a time.', 2, 30);
 

