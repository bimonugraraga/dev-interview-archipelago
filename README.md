# dev-interview-archipelago

## Basic Question
### You can see the diagram inside the folder Draw_IO.

Users can upload pictures from the website. The website send the picture to BE using API. Then BE upload the picture to bucket and get presigned URL with expiry time. The URL will be stored temporarily in Cache. I am not storing the URL directly to DB to avoid storing rejected pictures. The URL inside bucket and redis have short expiry time, so if the moderator doesn’t review it, the picture is automatically deleted. If the moderator rejects the picture, then BE will delete the picture from the bucket and cache. But, If the moderator approve the picture, then BE will generate new URL with longer expiry time and store it to DB.

Tech stacks
1. BE = Go/JS/TS/…
2. Bucket = AWS S3
3. Cache = Redis
4. Database = MySQL/PSQL/…

## SQL
### Level 1 (Novice - Expected Task Time: 1 minute):
``
SELECT count(CustomerID) from Customers
where Country = 'Germany';
``




### Level 2 (Business Admin - Expected Task Time <4 minutes):
``
SELECT count(CustomerID), Country from Customers
Group by Country
having count(CustomerID) >= 5;
``


### Level 3 (Average Developer - Expected Task Time <8 minutes):
``
SELECT c.CustomerName, count(o.OrderID) as order_count from Customers c
Left Join Orders o on o.CustomerID = c.CustomerID
group by c.CustomerName
having count(o.OrderID) >= 5;
``

## JS/TS
### You can see the answer inside folder JS
Run ``node JS/<file_name>`` or ``node <file_name>``

## Website Security Best Practises
1. Encrypted communication between BE and FE.
2. Use env file for config, better to place inside env file OS.
3. For third party creds and other sensitive data better use vault, you can use GSM.
4. Basic authentication for internal and external use.

## Website Performance Best Practice
1. Use cache (Redis/Memcache).
2. Use thread or go routine.
3. Use Queue and PubSub with load balancer if the traffic is high.
4. Use retry queue if needed alongside jitter algorithm so the queue doesn't stuck
5. Ratelimit RPS to third party and DB.
6. Scaling server instance, either horizontal or vertical.

## Go
### You can see the answer inside folder JS
Run ``go run GO/main.js`` or ``go run main.js``

## Tools
- Git = 4/5
- Redis = 4/5
- VSCode / JetBrains = 4/5
- Linux = 3/5
- AWS
    - EC2 = 3/5
    - Lambda = 3/5
    - RDS = 3/5
    - Cloudwatch = 0/5
    - S3 = 4/5
- Unit testing = 4/5
- Kanban boards = 4/5
