require 'rails_helper'

RSpec.describe Survey, type: :model do
  let(:overwhelmed) { 'sometimes' }
  let(:activities) { 'some text' }
  let(:supported) { '5' }

  describe 'validation' do
    let(:survey) { Survey.new({ overwhelmed:, activities:, supported: }) }

    describe 'overwhelmed' do
      valid_values = %w[never rarely sometimes often always]

      valid_values.each do |value|
        context "overwhelmed is #{value}" do
          let(:overwhelmed) { value }

          it "is valid" do
            expect(survey.valid?).to eq(true)
          end
        end
      end

      invalid_values = [ 'other', '', nil ]

      invalid_values.each do |value|
        context "overwhelmed is #{value}" do
          let(:overwhelmed) { value }

          it "is invalid" do
            expect(survey.valid?).to eq(false)
          end
        end
      end
    end

    describe 'supported' do
      valid_values = %w[1 2 3 4 5 6 7 8 9 10]

      valid_values.each do |value|
        context "supported is #{value}" do
          let(:supported) { value }

          it "is valid" do
            expect(survey.valid?).to eq(true)
          end
        end
      end

      invalid_values = [ '0', '11', '', nil ]

      invalid_values.each do |value|
        context "supported is #{value}" do
          let(:supported) { value }

          it "is invalid" do
            expect(survey.valid?).to eq(false)
          end
        end
      end
    end

    describe 'activities' do
      context 'activities is present' do
        let(:activities) { "some text" }

        it "is valid" do
          expect(survey.valid?).to eq(true)
        end
      end

      invalid_values = [ '', nil ]

      invalid_values.each do |value|
        context "activities is #{value}" do
          let(:activities) { value }

          it "is invalid" do
            expect(survey.valid?).to eq(false)
          end
        end
      end
    end
  end

  describe 'encryption' do
    let(:survey) { Survey.create({ overwhelmed:, activities:, supported: }) }

    it 'encrypts overwhelmed' do
      expect(survey.encrypted_attribute?(:overwhelmed)).to eq(true)
    end

    it 'encrypts supported' do
      expect(survey.encrypted_attribute?(:supported)).to eq(true)
    end

    it 'encrypts activities' do
      expect(survey.encrypted_attribute?(:activities)).to eq(true)
    end
  end
end
