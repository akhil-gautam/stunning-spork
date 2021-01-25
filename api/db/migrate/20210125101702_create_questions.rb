class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.references :quiz
      t.string :title
      t.text :description
      t.integer :answer_id
      t.timestamps
    end
  end
end
