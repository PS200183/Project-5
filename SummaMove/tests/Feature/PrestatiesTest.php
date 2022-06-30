<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

class PrestatiesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_Prestaties_ophalen()
    {Sanctum::actingAs(User::factory()->create(),['*']);
        $response = $this->get('api/Prestaties?User=1');

        $response->assertStatus(200);

    }

     public function test_Prestaties_Verwijderen()
    {
        Sanctum::actingAs(User::factory()->create(),['*']);
        $response = $this->delete('api/Prestaties/1');

        $response->assertStatus(200);

    }

}
