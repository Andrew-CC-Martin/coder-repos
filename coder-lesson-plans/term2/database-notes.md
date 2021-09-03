### Normal forms

#### 1st normal form

- column names unique
- order of records doesn't matter
- records in one column must be of same data type
- must have atomic values in columns (a single piece of information)
  - eg address must be broken up

#### 2nd normal form

- in 1st N.F.
- all columns depend on table's primary key
- in plainer words, 'does this column describe what the primary key identifies?'
- ie if the primary key is 'customer_id', then every column on that table should be some attribute of a customer

#### 3rd normal form

- in 2nd N.F.
- table contains only columns which are not transitively dependant on PK
- eg a table shouldn't contain 'state' if it contains 'postcode', since we can determine state from postcode.
- another eg: a table shouldn't contain 'age' and 'date of birth', since we can determine age from DOB


