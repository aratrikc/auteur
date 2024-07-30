<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Interactive Mesh with Text Windows</title>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; overflow: hidden; position: relative; }
        #author-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: 'Anton', sans-serif;
            font-size: 4em;
            pointer-events: none;
            z-index: 1;
        }
        .text-window {
            position: absolute;
            width: 150px;
            height: 150px;
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Anton', sans-serif;
            font-size: 1em;
            text-align: center;
            cursor: pointer;
            z-index: 2;
        }
        .text-window.open {
            display: block;
            width: 90vw;
            height: 90vh;
            top: 5%;
            left: 5%;
            background: white;
            overflow: auto;
            padding: 20px;
            box-sizing: border-box;
        }
        .text-window-header {
            cursor: pointer;
            padding: 5px;
            background: #ddd;
            border-bottom: 1px solid #ccc;
        }
        .text-window-content {
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div id="author-text">AUTH(O)R</div>
    <div id="doc1" class="text-window" style="left: 10px; top: 10px;">
        <div>Prelude

            I am green with gooseflesh, rashes on my lobes dripping pink into the mouth in the gravel. Ten thousand cubits before I crawl my abrasions across the pantheon to watch the dying nymphs lick the seed of the tree trunks, retching, coughing, spilling bile on sterile cement, piling bugs like stones until the chitin catches fire mocking the skyless above in ablaze totems of perishing prosthetics. The container betrays its scarce excuses of life in peaks through the plaster. The walls are groaning. Pearls embedded in the corridor fall and melt into pools burning scars into the ground becoming conduits that sprout flagellated ghostly apparitions that wave in dismissal of my state, every mechanism uncaring of my stagnant decline of fate becomes participant in my persecution. The glue makes my forearms itch with inflammation, constricting and dilating over and under my tissues in an alien respiratory rhythm, pulling my membrane into its own, getting it close enough to tearing it, maybe really rupturing every part of it, combining it with its own chemical nature in confusing asymmetry. I hear the walls start to shriek. The shrillness impales my ossicles in unforgiving continuity until my consciousness gives in and I snap into white
        
    </div>
    </div>
    <div id="doc2" class="text-window" style="left: 10px; top: 170px;">
        <div>Chapter I

            I walked down to the ____________ this morning. they wouldnt let me take my arms so one of the watchmen politely took them off as the other clumsily reached for the receptacles stashed in the cabinet below his desk. once I was rid of my offending appendages the lock lady scurried from behind the copse of deformed conifers to accompany me outside into the rainswept loggia circuiting the canals, glistening obsidian meandering across little turns- sharp and blunt- the ceiling, or whatever seemed to be left of it- was a crocheted mess of naked edges, hollow crevices stretching and shooting eyes into the sky, the edges holding them rugged, with stretches of straight stoic geometry interrupted with the walls arching into sudden curt smiles then resuming their heartless linearity. The locklady, an ancient tenant of this monstrosity and perchance more familiar with its contours, seemed to be scanning across the scene with as much wonder as her company, save the occasional brief head turn to register my presence. About a tenth of our way to the outers, or maybe it was twelve - my intuitive compass had been worn off his usual confidence by time and reprogramming - I could make out the humming diffusing along the corridor, ricocheting off the dampness into a disfigured hymn. The noises of the frownsmen, laughing? Weeping? I did not have an inkling. Marinating in reluctant pensiveness in my quarantined state back at the quarters, I had started to negotiate with myself the privilege of my circumstances, or maybe the lack thereof. I was divided. Had gilded walls coaxed me into a comfy imprisonment. Had I been the captive? Or was it the frownsmen? Were we both coincidentally on reflecting sides of the same predicament? Who was the captor? Was it circumstance? Was it one another? How was I to reconcile with the ambiguity of my part in imprisonment myself? What am I walking into? Where do these corridors take me? Could I afford indifference beyond the next couple steps? Suddenly my mind pulled down leather draped walls around itself until no one snaking thought could make its escape unto more troubling speculations. "Indifferent it is, then."

        </div>
    </div>
    <div id="doc3" class="text-window" style="left: 10px; top: 330px;">
        <div>Chapter II

            I blinked open one mucus clad iris after another at the skies, slate grey with pastel smudges of lilac and vermillion fragmented with fiery blasts of potassium flames flaring across the timid proportions of humidity in garish trapeze stunts. The moon snarled in her sleep, eyes half closed, fluttering, baring her yellowing teeth to stick out her tongue to lick the abrasions on her cheek. Forgiving my own brief betrayal of attention from a cycle of urgent rest derivation, I resumed in my paralysis with as much stillness as the moment would let me muster. There were no songs of the frownsmen to be heard here, only the vanquished weeping of the sky, soft pattering over hard soil giving way to polyphonic gargling dissipating from the heaving heart in the hells that was cruel enough to germinate these twisted ciliations looking vainly to their mothers above like guileless stillbirths in the fixed greying image of dearth and empty under the shelter of moistening eyes. Green was a myth. Entity even farther in the way of fantasies. Everything a mangled mirage spitting gravel into the snarling gash in the parachute of stardust. I was just a parasite living within a parasite living within a parasite resenting the parasite living within me until my leeching trunk split apart into filaments and broke into little spores that flew away in the wind, brushed over and across the sniffling countenance of a shrieking banyan, then swirling into the milky pond like fireflies in a porcelain palm. I had tried to grasp any meaning this stonefaced calamity of isolation around me had and yet right where I had my fingers a few clockspins before, life shooting phalange to phalange with bubbling corpuscles, splashing plasma, warmth and person, there was now only the feeling of something that was and might never be again.


        </div>
    </div>
    <div id="doc4" class="text-window" style="right: 10px; top: 10px;">
        <div>Chapter III</div>

        The griefminister stands on a platform, an elephantine trunk draped in chainmail along the upper half and somewhere turning into a malformed appendage of leprous foliations with wet soil and corroded ores wrestling into ambiguity with grey climbers and spiky filaments all the way to the mound of cracked concrete bragging defiance to earthly inertia as old rocks jitter and shift over the bubbling goo that engulfs their predecessors like primordial incubators. The griefminister frowns with his lips, leaving gaps with tar-smeared teeth peeking out. He clasps his plate firmly, anxiously, proudly. The tiny stone on his brow diffracts the negative light that coils around the mausoleum. His shaven head oddly complementing the uterine arches of the ceiling in the best built structure in fevershine. "No expense was spared", as they said. A flurry of crowbats spiral above in dizzying sinusoidal synchronicity, hurling up translucent puke in thin threads raining it over the greyfolk. They don't mind it, they have grown used to it.

    </div>
    <div id="doc5" class="text-window" style="right: 10px; top: 170px;">
        <div>Chapter IV

            To the general,
                Tilling a fickle line on the coarse alluvium hugging my feet, I write to tell you one and many things.
                I was distraught when the sewer broke, when the cattle fled, when the wet gorge stuffed in the corner of my abundant home became uneasy on the eyes and spat me out into the outers.
                There was no green to be seen here.
                No moths with pink and olive embroidery.
                No pigeons, no storks, no forked river nor swimming ferns and blue tailed macaez.
                In this dearth I walked.
                For walking was all I knew.
                The great valleys fatigue my ankles as every few miles the earth pushes her dark breasts up as if to woo me out of my tragedy.
                I have exhausted my grain. 
                I look for faces that look like mine but my neck hurts from turning my head fruitlessly quite so often.
                I hope to make it to your door some day, if you have managed to retain yours from them.
                Or if you could find it in yourself to welcome me;
                After what I am about to tell you.
                I have been putting it off talking about grief and hurt and flies and follies.
                But I really do need to tell you

                I have the breath of the stricken.
                I went to the house.
                I saw my caricature dance in madness and run herself into a nail in the wall.
                Saw the blood dry.
                I found a trap door.
                I found the things bound in rope, found the satchel of jute, the hat with their names on it, my torn dress, ripped to rags except the buttons and the blouse, and a little brown postcard sewn into the hem, a mural of ugly death and a hatchet propped up on the wall beside to go along with it.
                I took your bones before i sunk into my grave.
                Auth(o)r praises me.
                The tar-veined bastard bribed me with a book of flesh, every leaf a sliver of you hanging off the spine with hardened glue, congealed blood, the foam around your dying smile fossilized into crystal globes along the pages.
                My remorse knows no earthly bounds. I am sorry,
                But I was hungry,
                And you were more dead than I ever had been.
                Look where that got me.


        </div>
    </div>
    <div id="doc6" class="text-window" style="right: 10px; top: 330px;">
        <div>Chapter V

            The author sits in a cold room with four walls and no door, bulbous phalanges bending and angling across one another in a brittle lattice of parched skin, propping up the ink pot against one chafed knee. He coughs up a gob of phlegm, granular and metallic to taste. He sees the bloodlake boiling in the shadow of the moon with every brief intermission from the disintegrating white that the blink of an eye offers. Bloodlake timid, bloodlake bright. Bloodlake pungent. A crooked margin of vegetation, a vertebral descent of sizeless breathing clusters of forest green and beige conversing, as if quite violently in quiet violence, with the formidable contours of the purples and the greys. He finds these to be an exit point to a necessary illusion, shrinking the hot white lines burned into his retinal wall to attain an ironic congruence with the cornices looming over him on the upper edges of his white cell, the only hint of curvature bestowed upon an otherwise cubical confinement of nothingness. Sterility burnt so deep in his marrow that thought, desire, release, pain, all that clogged up into one putrid entanglement in the corner of the cell would repel the darnedest of lonesome fantasies. A green spot fluttering in the far side of his periphery like a reminder of machinic tenacity forging its own brand of self absorbed determination in his precious sight. He longs for water. Water that tasted like blood the last time he could afford a sip of it. Now his lungs have spikes, his alveoli engorged in an ugly shade of violet melting in a pond of decay in the valley of his soul. His neck itches though the thick belt of steel and leather. A sardonic twist of fate that could even make the clouds break into laughter; the only covered part of him was the one craving the most attention. He did not remember what it is that he would call his own before the conclusion started. The conclusion was all he had. All he remembered of his identity. All he remembered of his purposelessness. All he could muster in that hollow vessel in his skull to mean anything of human consciousness. He was deprived, of everything that could make him, that had made him, or that was brought upon him by his maker. He had no scriptures tucked under a sheath of skin, nor did the braille of rashes and gooseflesh along the coldness of his thighs convey anything of meaningful reconciliation. Submitting to the throbbing ache in his thumb, he finally lets go of his pen, stashes the pot in a broken cabinet protruding from the wall, and brings his eyes to a close.


        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let scene, camera, renderer, mesh, uniforms;
        let mouse = new THREE.Vector2(0.5, 0.5);
        let prevMouse = new THREE.Vector2(0.5, 0.5);
        let mouseSpeed = 0;
        let openWindow = null;

        init();
        animate();

        function init() {
            // Create the scene
            scene = new THREE.Scene();

            // Set up camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Set up renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create the mesh
            const geometry = new THREE.PlaneGeometry(10, 10, 200, 200);

            // Shader uniforms
            uniforms = {
                time: { value: 1.0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                mouse: { value: mouse },
                mouseSpeed: { value: 0 }
            };

            // Shader material
            const material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: `
                    uniform float time;
                    uniform vec2 mouse;
                    uniform float mouseSpeed;
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        float dist = distance(uv, mouse);
                        float effect = 1.0 / (dist + 0.05);
                        pos.z += sin((dist * 15.0 - time * 5.0) * (1.0 + mouseSpeed * 0.2)) * 0.3 * effect - dist * 1.2;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec2 mouse;
                    varying vec2 vUv;
                    void main() {
                        float dist = distance(vUv, mouse);
                        vec3 color = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 1.0, 1.0), dist);
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                wireframe: true
            });

            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Handle window resize
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('mousemove', onDocumentMouseMove, false);
            document.querySelectorAll('.text-window').forEach(window => {
                window.addEventListener('dblclick', () => toggleWindow(window));
            });
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        }

        function onDocumentMouseMove(event) {
            prevMouse.copy(mouse);
            mouse.x = (event.clientX / window.innerWidth);
            mouse.y = 1 - (event.clientY / window.innerHeight); // Invert Y for shader coordinates
            uniforms.mouse.value = mouse;

            // Calculate mouse speed
            const deltaX = mouse.x - prevMouse.x;
            const deltaY = mouse.y - prevMouse.y;
            mouseSpeed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            uniforms.mouseSpeed.value = mouseSpeed * 0.5; // Reduce speed impact
        }

        function animate() {
            requestAnimationFrame(animate);
            uniforms.time.value += 0.02 + uniforms.mouseSpeed.value * 0.1; // Lower overall speed
            renderer.render(scene, camera);
        }

        function toggleWindow(window) {
            if (openWindow && openWindow !== window) {
                openWindow.classList.remove('open');
            }
            window.classList.toggle('open');
            openWindow = window.classList.contains('open') ? window : null;
        }
    </script>
</body>
</html>

