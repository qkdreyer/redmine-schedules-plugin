# https://github.com/redmine/redmine/tree/master/lib/redmine/helpers/calendar.rb

module Redmine
  include Redmine::Helpers::Calendar
  module Helpers
    class Calendar
      def days
        return (@startdt..@enddt).to_a
      end
    end
  end
end
