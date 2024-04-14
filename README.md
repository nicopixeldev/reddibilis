When you have fields in your database table that are calculations based on other fields, you generally have a few options for managing them:

1. **Calculated Columns**: Some database management systems (DBMS) allow you to define calculated columns directly in your table schema. These columns are computed based on expressions involving other columns in the same table. For example, in SQL Server, you can create a computed column using a formula that references other columns in the table.

   ```sql
   CREATE TABLE MyTable (
       Column1 INT,
       Column2 INT,
       CalculatedColumn AS (Column1 + Column2)
   );
   ```

2. **Computed Values at Query Time**: You can calculate the values dynamically in your SQL queries rather than storing them directly in the table. This approach ensures that the calculations are always up-to-date and reduces redundancy in storage. You can use expressions in your SELECT statements to compute the values as needed.

   ```sql
   SELECT Column1, Column2, (Column1 + Column2) AS CalculatedColumn
   FROM MyTable;
   ```

3. **Triggers**: Triggers are database objects that can automatically perform actions in response to certain database events (e.g., INSERT, UPDATE, DELETE). You can create triggers to compute and update calculated fields whenever relevant changes occur in the table.

   ```sql
   CREATE TRIGGER UpdateCalculatedColumn
   ON MyTable
   AFTER INSERT, UPDATE
   AS
   BEGIN
       UPDATE MyTable
       SET CalculatedColumn = (Column1 + Column2)
       WHERE [condition];
   END;
   ```

Each approach has its own advantages and considerations. The choice depends on factors such as performance requirements, data consistency needs, and the capabilities of your database system.