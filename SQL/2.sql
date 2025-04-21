SELECT count(CustomerID), Country from Customers
Group by Country
having count(CustomerID) >= 5;
