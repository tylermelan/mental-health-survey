# Mental Health Survey Submission App

<img width="434" alt="question" src="https://github.com/user-attachments/assets/a28446a8-84d4-433d-b615-f60a1b309275">

## Install the app
A few dependencies are needed before installing the app:
- rails
- node
- yarn
- postgresql

After installing the dependencies, run `bin/setup` to install the gems and node modules. It will also prepare the database.

The `Survey` attributes are encrypted so the encryption keys need to be generated.

Run `bin/rails db:encryption:init` to generate a random key set. This will give an output similar to:
```
$ bin/rails db:encryption:init
Add this entry to the credentials of the target environment:

active_record_encryption:
  primary_key: EGY8WhulUOXixybod7ZWwMIL68R9o5kC
  deterministic_key: aPA5XyALhf75NNnMzaspW7akTfZp0lPY
  key_derivation_salt: xEY0dt6TZcAMg52K7O84wYzkjvbA62Hz
```

These values can be stored by copying and pasting them into Rails credentials.

To create or edit your rails credentials run `EDITOR=vim bin/rails credentials:edit` and then add the values generated in the previous step to the credentials file. You can change `vim` to the editor of your choice.

## Run the app

Run `bin/dev` to start your development server and esbuild. Then navigate to [http://localhost:3000/](http://localhost:3000/) in your browser to use the app.

## Running tests
RSpec: `bin/bundle exec rspec`

Jest: `yarn test`
