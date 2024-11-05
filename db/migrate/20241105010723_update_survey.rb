class UpdateSurvey < ActiveRecord::Migration[7.2]
  def change
    change_column :surveys, :supported, :string
    change_column :surveys, :activities, :text
  end
end
