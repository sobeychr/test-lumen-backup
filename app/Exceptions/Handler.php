<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function render($request, Exception $exception):string
    {
        // return var_dump($exception, true);

        if(
            method_exists($exception, 'getOriginalClassName')
            && $exception->getOriginalClassName() === 'ParseError')
        {
            return $this->renderParseError($exception);
        }

        return $this->renderError($exception);

        return parent::render($request, $exception);
    }

    protected function renderError(Exception $exception):string
    {
        return '<h1>Error</h1><p><b>File: </b>'.$exception->getFile().'<br/><b>Line: </b>'.$exception->getLine().'</p><pre>'.$exception->getMessage().'</pre>'.$this->renderTrace($exception);
    }

    protected function renderParseError(Exception $exception):string
    {
        return '<h1>ParseError</h1><p><b>File: </b>'.$exception->getFile().'<br/><b>Line: </b>'.$exception->getLine().'</p><pre>'.$exception->getMessage().'</pre>';
    }

    protected function renderTrace(Exception $exception):string
    {
        $arr = [];
        foreach($exception->getTrace() as $entry)
        {
            if(!isset($entry['file'])) {
                break;
            }

            $arr[] = '<li><b>'.$entry['line'].'</b> <i>'.$entry['file'].'</i></li>';
        }
        return '<ul>'.implode($arr, '').'</ul>';
    }
}
