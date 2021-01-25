class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.text :description
      t.datetime :last_date
      t.string :uuid
      t.boolean :frozen
      t.integer :pass_criteria
      t.timestamps
    end
  end
end
