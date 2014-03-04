## Custom Widget for [Wakanda](http://wakanda.org)
-------
The __Custom__ widget allows you to create a nice and attractive circular countdown widget

### Circular Count Down 
-------
![CountDown](https://raw.github.com/abdouziad1/Circular-CountDown-Widget/master/img/countdown.PNG)

### Usage
-------
Download this ZIP file, then extract it on your wakanda workspace.
Don't forget to rename the dizipped file as: "CountDownCircle". 


### Properties
-------
This widget has the following properties:

* __Day__:  Days left.
* __Hour__: Hours left.
* __Minute__: Minutes left.
* __Seconde__: Secondes left.

### Set only target date
-------
	Pass the target year, month, day, and time (24-hour) in the ccountdown function, rest of handled by circular countdown script.
    <script>
		e.g. year -> 2013, Month -> 5, Day -> 25, Time -> 18:00
		$(".ccounter").ccountdown(2013,5,25, '18:00');
    </script>

### More Information
-------
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).


For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
