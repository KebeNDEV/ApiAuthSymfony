<?php
// ... mantener imports existentes ...

class LoginFormAuthenticator extends AbstractLoginFormAuthenticator
{
    // ... mantener código existente ...

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        // Redirigir a la página de cursos después del login
        return new RedirectResponse($this->urlGenerator->generate('app_curso_index'));
    }

    // ... mantener código existente ...
}