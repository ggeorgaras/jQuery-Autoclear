//
//  jquery.autoclear.js
//
//  Created by Jesse Bunch (www.GetBunch.com) on 2011-03-12.
//  Copyright 2011 Jesse Bunch. All rights reserved.
//
// Usage:
//
// $(".autoclear").autoclear();
//

(function($) {

    /**
	 * Placeholder
	 * 1) Stores initial value in jQuery data object
	 * 2) On focus, removes initial value
	 * 3) On leave, adds initial value if value is blank
	 */
    $.fn.autoclear = function() {

        if (!this.length) {
            return this;
        }

        this.each(function() {

            var $this = $(this);

            $this.data("placeholder", $this.attr("value"));

            $this.focus(function() {
                if ($(this).val() == $(this).data("placeholder"))
                $(this).val('');
            });

            $this.blur(function() {
                if ($(this).val() == "")
                $(this).val($(this).data("placeholder"));
            });

        });

        return this;
    };

})(jQuery);