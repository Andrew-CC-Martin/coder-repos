# Database/postgres review

## Intro

- purpose of this review
- overview - ERD then create it using psql client
- make it clear that rails is doing all this stuff under the hood (in active record), we're just doing it manually here
- Make it clear that this isn't something esoteric
  - SQL is very very common, both in daily development and in coding tests
  - Raw SQL is required when you hit the limits of rails active record
  - ERDs are commonly whiteboarded, and the most basic/common way of understanding how an app's database is structured
- talk a little bit about what a database is, and how it's similar to a spreadsheet

## Step 1 - define business logic, and create ERD

- sketch out basic ERD for song recommender

## Step 2 - turn ERD into database

- fire up psql client

- create DB `create database song-recommender;`

- switch to it `\c song-recommender`

- create a table for genres

```SQL
create table genres (
  id serial primary key,
  name varchar(100)
);
```

- ask students what the CRUD actions are

- CREATE

```SQL
insert into genres (name) values ('hip hop');
```

- insert a few more, in one query

```sql
insert into genres (name) values
  ('EDM'),
  ('reggae'),
  ('alt rock'),
  ('country');
```

- READ

```sql
select * from genres;
select * from genres where name = 'alt rock';
select * from genres where name like '%egg%';
select id from genres where name = 'country';
```

- UPDATE

```sql
update genres set name = 'country and western' where name = 'country';
```

- DELETE

```sql
delete from genres where name like '%country%';
```

- make it clear that delete is totally permanent, and mention concept of soft deleting.

- create songs table, with genre_id as foreign key

```sql
create table songs (
  id serial primary key,
  genre_id serial references genres(id),
  name varchar(100),
  -- constraint fk_genre
  --   foreign key(genre_id)
  --     references genres(id)
)
```

- create new entry for songs

```sql
insert into songs (name, genre_id) values ('Gucci Gang', 1);
```

- show constraint in action by trying to insert invalid genre id

- show nested queries
```sql
select * from songs where genre_id = 
  (select id from genres where name = 'EDM')
;

insert into songs (name, genre_id) values
  ('Smells like teen spirit', (
    select id from genres where name like '%alt rock%'
  ))
;
```

- selecting from 2 tables at once

```sql
select genres.name, songs.name from genres, songs where genres.name like '%alt%';
```

## Extras

- more specific constraints (eg >0 for quantities)

```sql
create table bands (
  id serial primary key
  name varchar(100),
  members_count int check (members_count > 0)
);
```

- consider working through the SQL Ed exercise (if the students want me to)

```sql
```