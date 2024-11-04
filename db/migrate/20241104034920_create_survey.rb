class CreateSurvey < ActiveRecord::Migration[7.2]
  def change
    create_table :surveys do |t|
      t.string :overwhelmed, null: false
      t.integer :supported, null: false
      t.string :activities, null: false

      t.timestamps
    end
  end
end
