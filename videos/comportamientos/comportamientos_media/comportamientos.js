
var completionStatus = "incomplete";


function loadPage()
{   
   completionStatus = "completed";
   apiResult = apiCall( 'initialize' ); 

}

var isDisposed = false;

function dispose()
{
   if ( !isDisposed )
   {		
      if( apiVersion >= 1 )
      {
         apiCall( 'setValue', 'cmi.completion_status', completionStatus );
      }
      else
      {
         apiCall( 'setValue', 'cmi.core.lesson_status', completionStatus );
      }
      apiCall( 'terminate' );
      isDisposed = true;
   }
}


function OnLoad()
{
	
	loadPage();
		
}





