SELECT c.CustomerName, count(o.OrderID) as order_count from Customers c
Left Join Orders o on o.CustomerID = c.CustomerID
group by c.CustomerName
having count(o.OrderID) >= 5;
