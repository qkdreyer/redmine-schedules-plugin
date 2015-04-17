# https://github.com/redmine/redmine/tree/master/lib/redmine/helpers/calendar.rb

module CalendarHelper

  class Calendar
    attr_reader :startdt, :enddt

    def initialize(date, lang = current_language, period = :month)
      @calendar = Redmine::Helpers::Calendar.new(date, lang, period)
      @startdt = @calendar.startdt
      @enddt = @calendar.enddt
    end

    def days
      return (@startdt..@enddt).to_a
    end

  end
end
