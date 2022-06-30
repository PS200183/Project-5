<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OefeningsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Oefeningens_ophalen()
    {
        $response = $this->get('api/oefeningens');

        $response->assertStatus(200);

    }

}
